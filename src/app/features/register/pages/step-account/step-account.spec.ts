import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepAccountComponent } from './step-account';

describe('StepAccountComponent', () => {
  let component: StepAccountComponent;
  let fixture: ComponentFixture<StepAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepAccountComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StepAccountComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
