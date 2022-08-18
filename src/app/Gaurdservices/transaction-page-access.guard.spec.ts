import { TestBed } from '@angular/core/testing';

import { TransactionPageAccessGuard } from './transaction-page-access.guard';

describe('TransactionPageAccessGuard', () => {
  let guard: TransactionPageAccessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TransactionPageAccessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
