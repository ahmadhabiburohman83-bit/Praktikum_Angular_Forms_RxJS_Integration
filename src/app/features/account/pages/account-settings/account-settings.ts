import { Component, OnInit, inject, DestroyRef } from '@angular/core'; 
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
import { MatFormFieldModule } from '@angular/material/form-field'; // 1. TULIS IMPORT INI
// PERBAIKAN: Jalur nama file diubah dari account. menjadi account.service
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
      fullName: ['', [Validators.required, noWhitespaceValidator]], 
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
   
        // 1. Isi data ke form utama
        this.settingsForm.patchValue({ 
          accountType: profile.accountType, 
          fullName:    profile.fullName, 
          email:       profile.email, 
          phone:       profile.phone, 
          bio:         profile.bio || '', 
        }); 
   
        // 2. Isi data ke grup bisnis (jika ada)
        if (profile.companyName) { 
          this.businessGrp.patchValue({ 
            companyName:    profile.companyName, 
            npwp:           profile.npwp || '', 
            businessSector: profile.businessSector || '', 
          }); 
        } 
   
        // 3. Aktifkan validasi & tombol
        this.setupConditionalFields(); 
        this.setupSaveButton(); 
        this.settingsForm.markAsPristine(); 
        this.settingsForm.markAsUntouched(); 
        
        // 4. Matikan Loading!
        this.isLoading = false; 
      },
      error: (err) => {
        console.error('Error memuat profil:', err);
        this.isLoading = false; 
      }
    });
  }

  asyncEmailValidator() { 
    return (ctrl: AbstractControl): Observable<ValidationErrors | null> => { 
      const email = ctrl.value; 
 
      if (!email) return of(null);                   
      if (email === this.currentEmail) return of(null); 
      if (!email.includes('@')) return of(null);     
 
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
      finalize(() => this.isSaving = false) 
    ).subscribe({ 
      next: () => { 
        this.currentEmail = raw.email;  
        this.settingsForm.markAsPristine();  
        this.canSave = false; 
        this.saveSuccess = true; 
        setTimeout(() => this.saveSuccess = false, 3000); 
      }, 
      error: (err: any) => console.error('Save error:', err) // PERBAIKAN: Tambahkan tipe data eksplisit : any
    }); 
  } 
 
  // Getters 
  get accountType()  { return this.settingsForm.get('accountType'); } 
  get emailCtrl()    { return this.settingsForm.get('email'); } 
  get businessGrp()  { return this.settingsForm.get('business') as FormGroup; } 
  get isBusiness()   { return this.accountType?.value === 'business'; } 
}