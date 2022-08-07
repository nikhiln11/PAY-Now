import { TestBed } from '@angular/core/testing';

import { RecauthService } from './recauth.service';

describe('RecauthService', () => {
  let service: RecauthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
