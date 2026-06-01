import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';       // <-- 1. IMPORT UTAMA
import { MatButtonModule } from '@angular/material/button';   // <-- 2. IMPORT UTAMA

@Component({
  selector: 'app-step-review',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,     // <-- 3. DAFTARKAN DI SINI
    MatButtonModule    // <-- 4. DAFTARKAN DI SINI
  ],
  templateUrl: './step-review.html',
  styleUrl: './step-review.scss'
})
export class StepReviewComponent {
  @Input() allValues: any;

  // State awal: password disembunyikan (false)
  showPassword = false;
}