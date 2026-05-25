import { TestBed } from '@angular/core/testing';

import { UsernameAsync } from './username-async';

describe('UsernameAsync', () => {
  let service: UsernameAsync;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsernameAsync);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
