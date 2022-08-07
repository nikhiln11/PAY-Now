import { TestBed } from '@angular/core/testing';

import { NextgaurdGuard } from './nextgaurd.guard';

describe('NextgaurdGuard', () => {
  let guard: NextgaurdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NextgaurdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
