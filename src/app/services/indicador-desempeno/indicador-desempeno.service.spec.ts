import { TestBed } from '@angular/core/testing';

import { IndicadorDesempenoService } from './indicador-desempeno.service';

describe('IndicadorDesempenoService', () => {
  let service: IndicadorDesempenoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndicadorDesempenoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
