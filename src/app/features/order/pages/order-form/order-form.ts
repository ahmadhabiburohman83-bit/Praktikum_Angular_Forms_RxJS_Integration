import { Component, OnInit, OnDestroy, inject } from '@angular/core'; 
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { combineLatest, Subject, Observable } from 'rxjs'; 
import { debounceTime, takeUntil, startWith, map, switchMap, distinctUntilChanged, filter } from 'rxjs/operators'; 

import { ProductService } from '../../services/product.service'; 
import { DraftService }   from '../../../../core/services/draft.service'; 

const DRAFT_KEY = 'order_form'; 

@Component({ 
  selector: 'app-order-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule
  ],
  templateUrl: './order-form.html', 
  styleUrl: './order-form.scss'
}) 
export class OrderFormComponent implements OnInit, OnDestroy { 
  private fb          = inject(FormBuilder); 
  private productSvc  = inject(ProductService); 
  private draftSvc    = inject(DraftService); 
  private snackBar    = inject(MatSnackBar); 
  private destroy$    = new Subject<void>(); 

  orderForm!: FormGroup; 
  lastSaved: Date | null = null; 
  isSaving = false; 

  // Properti untuk menghitung grand total secara reaktif
  grandTotal$!: Observable<number>;

  // State untuk dropdown pencarian per baris item
  searchResults: { [index: number]: any[] } = {}; 
  searchLoading: { [index: number]: boolean } = {}; 

  ngOnInit() { 
    this.buildForm(); 
    this.tryRestoreDraft(); 
    this.setupAutoSave(); 
    this.setupReactiveTotal(); 
  } 

  // ── 1. BANGUN FORM UTAMA (Sub-Sesi B) ──────────────────────────────────
  buildForm() { 
    this.orderForm = this.fb.group({ 
      customerName:    ['', Validators.required], 
      customerPhone:   ['', [Validators.required, Validators.pattern(/^08[0-9]{8,11}$/)]], 
      deliveryAddress: ['', Validators.required], 
      notes:           [''], 
      items: this.fb.array([ 
        this.createItemRow() // Mulai dengan 1 baris kosong default
      ]), 
    }); 

    // Jalankan live search untuk baris pertama (index 0)
    this.setupItemSearch(0);
  } 

  // ── 2. FACTORY METHOD BARIS ITEM (Sub-Sesi B) ──────────────────────────
  createItemRow(data?: any): FormGroup { 
    return this.fb.group({ 
      productSearch: [data?.productSearch || ''],  // Kolom input ketik pencarian
      productId:     [data?.productId     || '', Validators.required], 
      productName:   [data?.productName   || ''], 
      unitPrice:     [data?.unitPrice     || 0, Validators.min(1)], 
      quantity:      [data?.quantity      || 1, [Validators.required, Validators.min(1), Validators.max(999)]], 
      discount:      [data?.discount      || 0, [Validators.min(0), Validators.max(100)]], 
    }); 
  } 

  // ── 3. GETTERS FORM CONTROL (Sub-Sesi B) ────────────────────────────────
  get items(): FormArray { return this.orderForm.get('items') as FormArray; } 
  get itemGroups(): FormGroup[] { return this.items.controls as FormGroup[]; } 

  // ── 4. TAMBAH & HAPUS BARIS DINAMIS (Sub-Sesi B & D) ────────────────────
  addItem() { 
    const newIndex = this.items.length; 
    this.items.push(this.createItemRow()); 
    this.setupItemSearch(newIndex); // Hubungkan fitur live search ke baris baru ini
  } 

  removeItem(i: number) { 
    if (this.items.length === 1) return; // Minimal harus tersisa 1 baris item
    this.items.removeAt(i); 
    delete this.searchResults[i]; 
    delete this.searchLoading[i];
  } 

  // ── 5. LIVE SEARCH PRODUK VIA SWITCHMAP (Sub-Sesi D) ───────────────────
  setupItemSearch(index: number) { 
    const searchCtrl = this.items.at(index).get('productSearch')!; 
   
    searchCtrl.valueChanges.pipe( 
      debounceTime(350), 
      distinctUntilChanged(), 
      switchMap(query => { 
        // Jika teks pencarian diisi, nyalakan spinner loading baris tersebut
        this.searchLoading[index] = true; 
        return this.productSvc.searchProducts(query || ''); 
      }), 
      takeUntil(this.destroy$)
    ).subscribe(products => { 
      this.searchLoading[index] = false; 
      this.searchResults[index] = products; 
    }); 
  } 
   
  selectProduct(index: number, product: any) { 
    const row = this.items.at(index); 
    row.patchValue({ 
      productId:   product.id, 
      productName: product.title, 
      unitPrice:   this.productSvc.toIDR(product.price), 
      productSearch: product.title 
    }); 
    this.searchResults[index] = []; // Bersihkan hasil pencarian setelah dipilih (menutup dropdown)
  } 

  // ── 6. KALKULASI TOTAL REAKTIF COMBINELATEST (Sub-Sesi C) ───────────────
  setupReactiveTotal() { 
    this.grandTotal$ = this.items.valueChanges.pipe( 
      startWith(this.items.value), 
      map((rows: any[]) => 
        rows.reduce((total, row) => { 
          const price    = Number(row.unitPrice) || 0; 
          const qty      = Number(row.quantity)  || 0; 
          const discount = Number(row.discount)  || 0; 
          const subtotal = price * qty; 
          const discAmt  = subtotal * (discount / 100); 
          return total + (subtotal - discAmt); 
        }, 0) 
      ) 
    ); 
  } 
   
  getRowSubtotal(i: number): number { 
    const row = this.items.at(i).value; 
    const price    = Number(row.unitPrice) || 0; 
    const qty      = Number(row.quantity)  || 0; 
    const discount = Number(row.discount)  || 0; 
    const subtotal = price * qty; 
    return subtotal - (subtotal * discount / 100); 
  } 

  // ── 7. MEKANISME AUTO-SAVE DRAFT & RESTORE (Sub-Sesi E) ─────────────────
  setupAutoSave() { 
    this.orderForm.valueChanges.pipe( 
      debounceTime(2000), 
      distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b)), 
      filter(() => this.orderForm.dirty), 
      takeUntil(this.destroy$) 
    ).subscribe(value => { 
      this.isSaving = true; 
      this.draftSvc.save(DRAFT_KEY, value); 
      this.lastSaved = new Date(); 
      this.isSaving  = false; 
    }); 
  } 
   
  tryRestoreDraft() { 
    const draft = this.draftSvc.load(DRAFT_KEY); 
    if (!draft) return; 
   
    const savedAt = new Date(draft.savedAt); 
    const minutesAgo = (Date.now() - savedAt.getTime()) / 60000; 
   
    if (minutesAgo > 60) { 
      this.draftSvc.clear(DRAFT_KEY); // Lewat 1 jam = draf hangus
      return; 
    } 
   
    const restore = confirm( 
      `Ditemukan draft pesanan tersimpan pada ${savedAt.toLocaleString()}.\nPulihkan data draft?` 
    ); 
   
    if (!restore) { 
      this.draftSvc.clear(DRAFT_KEY); 
      return; 
    } 
   
    // Susun ulang baris FormArray agar sesuai jumlah item dalam draf
    const savedItems: any[] = draft.data.items || []; 
    while (this.items.length < savedItems.length) { 
      this.items.push(this.createItemRow()); 
    } 
   
    this.orderForm.patchValue(draft.data); 
    this.lastSaved = savedAt; 
    this.snackBar.open('Draft pesanan berhasil dipulihkan!', 'OK', { duration: 3000 }); 
  } 
   
  clearDraft() { 
    this.draftSvc.clear(DRAFT_KEY); 
    this.orderForm.reset(); 
    this.lastSaved = null; 
    while (this.items.length > 1) this.items.removeAt(1); 
  } 
   
  onSubmit() { 
    if (this.orderForm.invalid) { 
      this.orderForm.markAllAsTouched(); 
      return; 
    } 
    console.log('Payload Order Berhasil:', this.orderForm.getRawValue()); 
    this.snackBar.open('Pesanan berhasil dibuat!', 'OK', { duration: 4000 }); 
    this.clearDraft(); 
  } 

  ngOnDestroy() { 
    this.destroy$.next(); 
    this.destroy$.complete(); 
  } 
}