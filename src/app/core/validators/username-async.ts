// src/app/core/validators/username-async.ts
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map, Observable, timer, switchMap, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsernameAsyncService {
  constructor(private http: HttpClient) {}

  validate(): AsyncValidatorFn {
    return (ctrl: AbstractControl): Observable<ValidationErrors | null> => {
      return timer(500).pipe( // Debounce 500ms
        switchMap(() => {
          if (!ctrl.value) return of(null);
          // Contoh pemanggilan API
          return this.http.get(`https://dummyjson.com/users/search?q=${ctrl.value}`).pipe(
            map((res: any) => (res.total > 0 ? { usernameTaken: true } : null))
          );
        })
      );
    };
  }
}