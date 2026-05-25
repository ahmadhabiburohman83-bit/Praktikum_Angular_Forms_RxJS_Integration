// src/app/features/register/pages/step-account/step-account.ts

import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { UsernameAsyncValidator } from '../../../../core/validators/username-async'; // Sesuaikan path-nya

@Component({
  selector: 'app-step-account',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCheckboxModule
  ],
  templateUrl: './step-account.html'
})
export class StepAccountComponent {
  private fb = inject(FormBuilder);
  
  // Memanggil service yang sudah Anda buat
  private usernameAsync = inject(UsernameAsyncValidator);

  accountForm = this.fb.group({
    username: [
      '', 
      {
        validators: [], // Validator sinkron taruh di sini
        asyncValidators: [this.usernameAsync.checkAvailability()] // Async validator taruh di sini
      }
    ]
  });
}