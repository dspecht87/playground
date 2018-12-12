import { TestBed } from '@angular/core/testing';

import { BtcRateService } from './btc-rate.service';

describe('BtcRateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BtcRateService = TestBed.get(BtcRateService);
    expect(service).toBeTruthy();
  });
});
