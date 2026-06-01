import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';     // <-- 1. IMPORT UTAMA
import { MatButtonModule } from '@angular/material/button'; // <-- 2. IMPORT UTAMA

@Component({
  selector: 'app-step-account',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatIconModule,     // <-- 3. DAFTARKAN DI SINI
    MatButtonModule    // <-- 4. DAFTARKAN DI SINI
  ],
  templateUrl: './step-account.html',
  styleUrl: './step-account.scss'
})
export class StepAccountComponent {
  @Input() form!: FormGroup;

  // State boolean untuk melacak apakah password sedang disembunyikan atau tidak
  hidePassword = true;
  hideConfirmPassword = true;
}