import { TestBed } from '@angular/core/testing';

import { AfterPaymentPageAccessGuard } from './after-payment-page-access.guard';

describe('AfterPaymentPageAccessGuard', () => {
  let guard: AfterPaymentPageAccessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AfterPaymentPageAccessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
