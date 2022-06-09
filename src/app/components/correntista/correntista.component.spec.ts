import { TestBed } from '@angular/core/testing';

import { CorrentistaService } from './correntista.component';

describe('CorrentistaService', () => {
  let service: CorrentistaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorrentistaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
