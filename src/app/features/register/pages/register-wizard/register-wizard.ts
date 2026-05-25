import { Component } from '@angular/core';
// 1. Import modul yang dibutuhkan
import { ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-register-wizard',
  standalone: true,
  // 2. Daftarkan di sini agar bisa digunakan di HTML-nya
  imports: [
    ReactiveFormsModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './register-wizard.html', // Sesuaikan dengan path file HTML Anda
  styleUrls: [] 
})
export class RegisterWizardComponent {
  // Logika komponen Anda
}