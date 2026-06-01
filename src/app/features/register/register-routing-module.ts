import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterWizardComponent } from './pages/register-wizard/register-wizard';
import { WizardDeactivateGuard } from '../../core/guards/wizard-deactivate.guard'; // <-- IMPORT DI SINI

const routes: Routes = [
  {
    path: '',
    component: RegisterWizardComponent,
    canDeactivate: [WizardDeactivateGuard] // <-- PASANG DI SINI
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterRoutingModule {}