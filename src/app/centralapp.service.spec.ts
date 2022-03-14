import { TestBed } from '@angular/core/testing';

import { CentralappService } from './centralapp.service';

describe('CentralappService', () => {
  let service: CentralappService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentralappService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
