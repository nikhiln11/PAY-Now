import { TestBed } from '@angular/core/testing';

import { NamecheckService } from './namecheck.service';

describe('NamecheckService', () => {
  let service: NamecheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NamecheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
