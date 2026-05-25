import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// 1. Strong Password
export function strongPasswordValidator(): ValidatorFn {
  return (ctrl: AbstractControl): ValidationErrors | null => {
    const v: string = ctrl.value || '';
    if (!v) return null;
    const e: ValidationErrors = {};
    if (!/[A-Z]/.test(v)) e['noUppercase'] = true;
    if (!/[a-z]/.test(v)) e['noLowercase'] = true;
    if (!/[0-9]/.test(v)) e['noNumber'] = true;
    if (!/[!@#$%^&*]/.test(v)) e['noSymbol'] = true;
    if (v.length < 8) e['tooShort'] = true;
    return Object.keys(e).length ? e : null;
  };
}

// Tambahkan validator lainnya (passwordMatch, nik, dll) di bawahnya...
// ── 2. Password Match (cross-field, dipasang di FormGroup) ─────────── 
export function passwordMatchValidator(a='password', b='confirmPassword'): 
ValidatorFn { 
  return (group: AbstractControl): ValidationErrors | null => { 
    const vA = group.get(a)?.value; 
    const vB = group.get(b)?.value; 
    if (!vA || !vB) return null; 
    return vA === vB ? null : { passwordMismatch: true }; 
  }; 
} 
 
// ── 3. Format NIK (16 digit angka) ─────────────────────────────────── 
export function nikValidator(): ValidatorFn { 
  return (ctrl: AbstractControl): ValidationErrors | null => { 
    const v: string = (ctrl.value || '').replace(/\s/g, ''); 
    if (!v) return null; 
    if (!/^\d{16}$/.test(v)) return { invalidNik: true }; 
    return null; 
  }; 
} 
 
// ── 4. No Whitespace Only ───────────────────────────────────────────── 
export function noWhitespaceValidator(): ValidatorFn { 
  return (ctrl: AbstractControl): ValidationErrors | null => { 
    if (!ctrl.value) return null; 
    return ctrl.value.trim().length === 0 ? { whitespaceOnly: true } : null; 
  }; 
}