import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-routing-module';

// UBAH BARIS INI: Hilangkan kata '.component' agar sesuai dengan file order-form.ts kamu
import { OrderFormComponent } from './pages/order-form/order-form'; 

@NgModule({
  imports: [
    CommonModule,
    OrderRoutingModule,
    OrderFormComponent // <-- Sekarang aman karena referensinya sudah terbaca
  ]
})
export class OrderModule { }