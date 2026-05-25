import { TestBed } from '@angular/core/testing';

import { UsernameAsyncValidator } from './username-async';

describe('UsernameAsyncValidator', () => {
  let service: UsernameAsyncValidator;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsernameAsyncValidator);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
