import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
import { Observable, of } from 'rxjs'; 
import { map, catchError, shareReplay } from 'rxjs/operators'; 
 
export interface Product { 
  id: number; 
  title: string; 
  price: number;   // USD dari API, kita konversi ke IDR 
  stock: number; 
  thumbnail: string; 
  category: string; 
} 
 
@Injectable({ providedIn: 'root' }) 
export class ProductService { 
  private base = 'https://dummyjson.com/products'; 
  
  // 1. Deklarasikan variabelnya di sini tanpa mengisi nilainya dulu
  private allProducts$: Observable<Product[]>; 

  // 2. Isi nilainya di dalam constructor setelah http sukses di-inject
  constructor(private http: HttpClient) {
    this.allProducts$ = this.http 
      .get<{ products: Product[] }>(this.base + '?limit=100') 
      .pipe( 
        map(r => r.products), 
        shareReplay(1) 
      ); 
  } 
 
  // Search produk — untuk live search di order item 
  searchProducts(query: string): Observable<Product[]> { // <-- Ditambahkan <Product[]> agar strict mode tidak error
    if (!query || query.length < 2) { 
      return this.allProducts$.pipe(map(p => p.slice(0, 8))); 
    } 
    return this.http 
      .get<{ products: Product[] }>(`${this.base}/search?q=${query}&limit=8`) 
      .pipe( 
        map(r => r.products), 
        catchError(() => of([])) 
      ); 
  } 
 
  // Harga IDR (simulasi: USD * 15.500) 
  toIDR(usd: number): number { 
    return Math.round(usd * 15500); 
  } 
}