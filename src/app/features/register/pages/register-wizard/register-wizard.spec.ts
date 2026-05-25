import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterWizardComponent } from './register-wizard';

describe('RegisterWizardComponent', () => {
  let component: RegisterWizardComponent;
  let fixture: ComponentFixture<RegisterWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterWizardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterWizardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
