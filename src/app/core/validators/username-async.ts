import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, timer, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UsernameAsyncValidator {
  private http = inject(HttpClient);
  
  // Simulasi daftar username terpakai (gunakan API asli jika tersedia)
  private readonly taken = ['admin', 'user', 'test', 'root', 'politeknik'];

  /**
   * Validator untuk mengecek ketersediaan username secara asinkron
   */
  checkAvailability(): AsyncValidatorFn {
    return (ctrl: AbstractControl): Observable<ValidationErrors | null> => {
      // 1. Validasi awal: abaikan jika input kosong atau terlalu pendek
      if (!ctrl.value || ctrl.value.length < 3) {
        return of(null);
      }

      // 2. Gunakan timer untuk debounce (menunda request selama 600ms)
      return timer(600).pipe(
        switchMap(() => {
          // Ganti baris ini dengan pemanggilan API asli jika ada
          // return this.http.get(`/api/users/check/${ctrl.value}`);
          
          const isTaken = this.taken.includes(ctrl.value.toLowerCase());
          return of(isTaken);
        }),
        // 3. Transformasi hasil menjadi error object atau null
        map((isTaken) => (isTaken ? { usernameTaken: true } : null)),
        // 4. Jika API gagal, kita anggap valid agar user tidak terganggu
        catchError(() => of(null))
      );
    };
  }
}