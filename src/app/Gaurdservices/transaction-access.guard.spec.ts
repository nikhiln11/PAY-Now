import { TestBed } from '@angular/core/testing';

import { TransactionAccessGuard } from './transaction-access.guard';

describe('TransactionAccessGuard', () => {
  let guard: TransactionAccessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TransactionAccessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
