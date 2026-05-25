import { Component } from '@angular/core';
// 1. Import modul yang dibutuhkan
import { ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { StepPersonal } from '../step-personal/step-personal';
import { StepAccountComponent } from '../step-account/step-account';
import { StepReview } from '../step-review/step-review';

@Component({
  selector: 'app-register-wizard',
  standalone: true,
  // 2. Daftarkan di sini agar bisa digunakan di HTML-nya
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
  templateUrl: './register-wizard.html', // Sesuaikan dengan path file HTML Anda
  styleUrls: [] 
})
export class RegisterWizardComponent {
  currentStep = 1;
  // Logika komponen Anda
}