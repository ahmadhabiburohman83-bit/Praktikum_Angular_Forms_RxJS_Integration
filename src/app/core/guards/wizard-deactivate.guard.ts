import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

export interface WizardComponent {
  hasUnsavedChanges(): boolean;
}

@Injectable({
  providedIn: 'root'
})
export class WizardDeactivateGuard implements CanDeactivate<WizardComponent> {
  canDeactivate(component: WizardComponent): boolean {
    if (component && component.hasUnsavedChanges()) {
      return confirm(
        'Data registrasi Anda belum dikirim.\n' +
        'Yakin ingin meninggalkan halaman ini?'
      );
    }
    return true;
  }
}