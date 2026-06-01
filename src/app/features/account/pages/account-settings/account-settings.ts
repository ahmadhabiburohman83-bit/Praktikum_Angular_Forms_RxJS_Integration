import { Component, OnInit, inject, DestroyRef, ChangeDetectorRef } from '@angular/core'; // <-- 1. IMPORT CHANGEDETECTORREF
import { FormBuilder, FormGroup, Validators, AbstractControl, ReactiveFormsModule, ValidationErrors } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'; 
import { Observable, timer, of } from 'rxjs'; 
import { switchMap, map, catchError, startWith, finalize } from 'rxjs/operators'; 

// Angular Material Imports
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field'; 

import { AccountService } from '../../services/account'; 
import { noWhitespaceValidator } from '../../../../core/validators/password.validator'; 

@Component({ 
  selector: 'app-account-settings', 
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule, 
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatIconModule
  ],
  templateUrl: './account-settings.html', 
  styleUrl: './account-settings.scss'
}) 
export class AccountSettingsComponent implements OnInit { 
  private fb          = inject(FormBuilder); 
  private accountSvc  = inject(AccountService); 
  private destroyRef  = inject(DestroyRef); 
  private cdr         = inject(ChangeDetectorRef); // <-- 2. INJECT KE DALAM KOMPONEN

  settingsForm!: FormGroup; 
  isLoading    = true;   
  isSaving     = false; 
  canSave      = false;  
  saveSuccess  = false; 
 
  private currentEmail = ''; 
 
  ngOnInit() { 
    this.buildForm(); 
    this.loadProfile(); 
  } 
 
  buildForm() { 
    this.settingsForm = this.fb.group({ 
      accountType: ['personal', Validators.required], 
      fullName: ['', [Validators.required, noWhitespaceValidator()]], 
      email: [ 
        '', 
        [Validators.required, Validators.email], 
        [this.asyncEmailValidator()] 
      ], 
      phone: ['', [Validators.required, Validators.pattern(/^08[0-9]{8,11}$/)]], 
      bio: ['', Validators.maxLength(200)], 
 
      business: this.fb.group({ 
        companyName:    [''], 
        npwp:           ['', Validators.pattern(/^\d{2}\.\d{3}\.\d{3}\.\d-\d{3}\.\d{3}$/)], 
        businessSector: [''], 
      }), 
    }); 
  } 

  loadProfile() { 
    this.isLoading = true; 
    
    this.accountSvc.getProfile().subscribe({
      next: (profile: any) => {
        this.currentEmail = profile.email; 
   
        this.settingsForm.patchValue({ 
          accountType: profile.accountType, 
          fullName:    profile.fullName, 
          email:       profile.email, 
          phone:       profile.phone, 
          bio:         profile.bio || '', 
        }); 
   
        if (profile.companyName) { 
          this.businessGrp.patchValue({ 
            companyName:    profile.companyName, 
            npwp:           profile.npwp || '', 
            businessSector: profile.businessSector || '', 
          }); 
        } 
   
        this.setupConditionalFields(); 
        this.setupSaveButton(); 
   
        this.settingsForm.markAsPristine(); 
        this.settingsForm.markAsUntouched(); 
        
        this.isLoading = false; 
        
        // <-- 3. PAKSA ANGULAR MENGGAMBAR ULANG UI SEKARANG JUGA! -->
        this.cdr.detectChanges(); 
      },
      error: (err) => {
        console.error('Gagal memuat data profil:', err);
        this.isLoading = false; 
        this.cdr.detectChanges(); // Paksa render ulang jika error
      }
    });
  }

  asyncEmailValidator() { 
    return (ctrl: AbstractControl): Observable<ValidationErrors | null> => { 
      const email = ctrl.value; 
 
      if (!email || email === this.currentEmail || !email.includes('@')) return of(null);     
 
      return timer(700).pipe(   
        switchMap(() => 
          this.accountSvc.isEmailTaken(email).pipe( 
            map(taken => taken ? { emailTaken: true } : null), 
            catchError(() => of(null))  
          )
        ) 
      ); 
    }; 
  } 

  setupConditionalFields() { 
    this.accountType!.valueChanges.pipe( 
      startWith(this.accountType!.value),  
      takeUntilDestroyed(this.destroyRef) 
    ).subscribe((type: string) => { 
      const bizGroup = this.businessGrp; 
 
      if (type === 'business') { 
        bizGroup.get('companyName')!.setValidators([Validators.required, Validators.minLength(3)]); 
        bizGroup.get('npwp')!.setValidators([ 
          Validators.required, 
          Validators.pattern(/^\d{2}\.\d{3}\.\d{3}\.\d-\d{3}\.\d{3}$/) 
        ]); 
        bizGroup.get('businessSector')!.setValidators(Validators.required); 
        bizGroup.enable(); 
      } else { 
        bizGroup.clearValidators(); 
        bizGroup.get('companyName')!.clearValidators(); 
        bizGroup.get('npwp')!.clearValidators(); 
        bizGroup.get('businessSector')!.clearValidators(); 
        bizGroup.reset(); 
        bizGroup.disable();  
      } 
 
      bizGroup.updateValueAndValidity(); 
    }); 
  } 

  setupSaveButton() { 
    this.settingsForm.statusChanges.pipe( 
      startWith(this.settingsForm.status), 
      takeUntilDestroyed(this.destroyRef) 
    ).subscribe(status => { 
      this.canSave = status === 'VALID' && this.settingsForm.dirty; 
    }); 
  } 

  onSave() { 
    if (!this.canSave || this.isSaving) return; 
    this.isSaving = true; 
 
    const raw = this.settingsForm.getRawValue(); 
    const payload = { 
      accountType: raw.accountType, 
      fullName:    raw.fullName, 
      email:       raw.email, 
      phone:       raw.phone, 
      bio:         raw.bio, 
      ...(raw.accountType === 'business' ? raw.business : {}), 
    }; 
 
    this.accountSvc.saveProfile(payload).pipe( 
      finalize(() => {
        this.isSaving = false;
        this.cdr.detectChanges(); // Paksa update UI setelah save
      }) 
    ).subscribe({ 
      next: () => { 
        this.currentEmail = raw.email;  
        this.settingsForm.markAsPristine();  
        this.canSave = false; 
        this.saveSuccess = true; 
        setTimeout(() => {
          this.saveSuccess = false;
          this.cdr.detectChanges(); // Paksa update UI saat pesan sukses hilang
        }, 3000); 
      }, 
      error: (err: any) => console.error('Save error:', err)
    }); 
  } 
 
  get accountType()  { return this.settingsForm.get('accountType'); } 
  get emailCtrl()    { return this.settingsForm.get('email'); } 
  get businessGrp()  { return this.settingsForm.get('business') as FormGroup; } 
  get isBusiness()   { return this.accountType?.value === 'business'; } 
}