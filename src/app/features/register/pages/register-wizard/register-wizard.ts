import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { StepPersonal } from '../step-personal/step-personal';
import { StepAccountComponent } from '../step-account/step-account';
import { StepReview } from '../step-review/step-review';

// Import Custom Validators
import { 
  strongPasswordValidator, 
  passwordMatchValidator, 
  nikValidator, 
  noWhitespaceValidator 
} from '../../../../core/validators/password.validator';
import { UsernameAsyncValidator } from '../../../../core/validators/username-async';

@Component({
  selector: 'app-register-wizard',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatProgressBarModule,
    StepPersonal,
    StepAccountComponent,
    StepReview
  ],
  templateUrl: './register-wizard.html',
  styleUrls: ['./register-wizard.scss'] 
})
export class RegisterWizardComponent implements OnInit {
  currentStep = 0;
  isSubmitting = false;

  personalForm!: FormGroup;
  accountForm!: FormGroup;

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);
  private usernameAsyncValidator = inject(UsernameAsyncValidator);

  ngOnInit(): void {
    // 1. Inisialisasi personalForm
    this.personalForm = this.fb.group({
      firstName: ['', [Validators.required, noWhitespaceValidator()]],
      lastName: ['', [Validators.required, noWhitespaceValidator()]],
      nik: ['', [Validators.required, nikValidator()]],
      gender: ['', Validators.required],
      birthDate: ['', Validators.required],
      phone: ['', Validators.required]
    });

    // 2. Inisialisasi accountForm
    this.accountForm = this.fb.group({
      username: [
        '', 
        [Validators.required, noWhitespaceValidator()], 
        [this.usernameAsyncValidator.checkAvailability()]
      ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, strongPasswordValidator()]],
      confirmPassword: ['', Validators.required],
      agreeTerms: [false, Validators.requiredTrue]
    }, { validators: passwordMatchValidator('password', 'confirmPassword') });
  }

  // Getter Methods untuk akses cepat di template HTML
  get fName() { return this.personalForm.get('firstName'); }
  get fNik() { return this.personalForm.get('nik'); }
  get fPhone() { return this.personalForm.get('phone'); }

  get aUser() { return this.accountForm.get('username'); }
  get aEmail() { return this.accountForm.get('email'); }
  get aPwd() { return this.accountForm.get('password'); }
  get aConfirm() { return this.accountForm.get('confirmPassword'); }

  // Logika navigasi wizard
  nextStep(): void {
    if (this.currentStep === 0) {
      if (this.personalForm.invalid) {
        this.personalForm.markAllAsTouched();
        return;
      }
    } else if (this.currentStep === 1) {
      if (this.accountForm.invalid) {
        this.accountForm.markAllAsTouched();
        return;
      }
    }
    this.currentStep++;
  }

  prevStep(): void {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  // Menggabungkan nilai dari kedua form
  get allValues() {
    return {
      ...this.personalForm.value,
      ...this.accountForm.value
    };
  }

  // Simulasi Submit
  onSubmit(): void {
    if (this.personalForm.invalid || this.accountForm.invalid) {
      this.personalForm.markAllAsTouched();
      this.accountForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    setTimeout(() => {
      this.isSubmitting = false;
      this.snackBar.open('Registrasi Berhasil!', 'Tutup', { duration: 3000 });
      this.router.navigate(['/login']);
    }, 2000);
  }

  // Cek apakah ada perubahan yang belum disimpan
  hasUnsavedChanges(): boolean {
    return this.personalForm.dirty || this.accountForm.dirty;
  }
}
