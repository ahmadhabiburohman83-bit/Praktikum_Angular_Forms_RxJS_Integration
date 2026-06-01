import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderFormComponent } from './pages/order-form/order-form'; // <-- Harus sama seperti ini

const routes: Routes = [
  {
    path: '', // <-- Kosong karena rute '/order' sudah didefinisikan secara lazy loading di tingkat root app.routes.ts
    component: OrderFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}