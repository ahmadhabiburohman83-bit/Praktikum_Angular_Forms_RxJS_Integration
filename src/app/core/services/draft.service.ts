import { Injectable } from '@angular/core'; 

// Service sederhana untuk auto-save draf ke localStorage
@Injectable({ providedIn: 'root' }) 
export class DraftService { 
  
  save(key: string, data: any): void { 
    try { 
      localStorage.setItem(`draft_${key}`, JSON.stringify({ 
        data, 
        savedAt: new Date().toISOString() 
      })); 
    } catch { 
      /* mengabaikan kuota penuh penuh error browser */ 
    } 
  } 
 
  // Diubah ke tipe data 'any' agar tidak memicu error sintaksis 'unknown T'
  load(key: string): any { 
    try { 
      const raw = localStorage.getItem(`draft_${key}`); 
      return raw ? JSON.parse(raw) : null; 
    } catch { 
      return null; 
    } 
  } 
 
  clear(key: string): void { 
    localStorage.removeItem(`draft_${key}`); 
  } 
}