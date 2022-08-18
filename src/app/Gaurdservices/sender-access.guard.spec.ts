import { TestBed } from '@angular/core/testing';

import { SenderAccessGuard } from './sender-access.guard';

describe('SenderAccessGuard', () => {
  let guard: SenderAccessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SenderAccessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
