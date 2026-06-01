import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing-module';
import { RegisterWizardComponent } from './pages/register-wizard/register-wizard';

@NgModule({
  declarations: [],
  imports: [CommonModule, 
    RegisterRoutingModule,
    RegisterWizardComponent
  ],
})
export class RegisterModule {}
