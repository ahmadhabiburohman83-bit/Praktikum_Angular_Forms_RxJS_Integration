// src/app/features/register/pages/step-account/step-account.ts

import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { UsernameAsyncService } from '../../../../core/validators/username-async'; // Sesuaikan path-nya

@Component({
  selector: 'app-step-account',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './step-account.html'
})
export class StepAccountComponent {
  private fb = inject(FormBuilder);
  
  // Memanggil service yang sudah Anda buat
  private usernameAsync = inject(UsernameAsyncService);

  accountForm = this.fb.group({
    username: [
      '', 
      {
        validators: [], // Validator sinkron taruh di sini
        asyncValidators: [this.usernameAsync.validate()] // Async validator taruh di sini
      }
    ]
  });
}