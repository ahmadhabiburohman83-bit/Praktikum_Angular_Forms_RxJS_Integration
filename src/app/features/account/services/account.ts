import { Injectable } from '@angular/core'; 
import { of, Observable } from 'rxjs'; 
import { delay } from 'rxjs/operators'; 
 
export interface UserProfile { 
  id: string; 
  accountType: 'personal' | 'business'; 
  fullName: string; 
  email: string; 
  phone: string; 
  bio: string; 
  companyName?: string; 
  npwp?: string; 
  businessSector?: string; 
} 
 
@Injectable({ providedIn: 'root' }) 
export class AccountService { 
  private profile: UserProfile = { 
    id: 'usr-001', 
    accountType: 'personal', 
    fullName: 'Ahmad Habiburrahman', 
    email:    'ahmadhabiburohman83@gmail.com', 
    phone:    '08990505994', 
    bio:      'Mahasiswa Jurusan D3 Teknologi Informasi, PSDKU Polinema Lumajang.', 
  }; 
 
  getProfile(): Observable<UserProfile> { 
    return of(this.profile).pipe(delay(800)); 
  } 
 
  isEmailTaken(email: string): Observable<boolean> { 
    const taken = ['admin@test.com', 'root@poltek.ac.id', 'noreply@system.com']; 
    return of(taken.includes(email.toLowerCase())).pipe(delay(700)); 
  } 
 
  saveProfile(data: Partial<UserProfile>): Observable<void> { 
    Object.assign(this.profile, data); 
    return of(undefined).pipe(delay(1000)); 
  } 
}