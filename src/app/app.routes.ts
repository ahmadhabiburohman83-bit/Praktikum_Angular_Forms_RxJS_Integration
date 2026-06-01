import { Routes } from '@angular/router';

export const routes: Routes = [
  // 1. Redirect the empty path (root) to the register page
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full'
  },
  // 2. Load the Register Module
  {
    path: 'register',
    loadChildren: () => import('./features/register/register-module').then(m => m.RegisterModule)
  },
  // 3. Load the Order Module
  {
    path: 'order',
    loadChildren: () => import('./features/order/order-module').then(m => m.OrderModule)
  },
  // 4. Load the Account Settings Component (Jalur file disesuaikan menjadi account-settings)
  {
    path: 'account',
    loadComponent: () => import('./features/account/pages/account-settings/account-settings').then(m => m.AccountSettingsComponent)
  }
];