import { TestBed } from '@angular/core/testing';

import { KonfigService } from './konfig.service';

describe('KonfigService', () => {
  let service: KonfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KonfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
