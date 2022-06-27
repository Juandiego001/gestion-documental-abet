import { TestBed } from '@angular/core/testing';

import { ResultadoAprendizajeService } from './resultado-aprendizaje.service';

describe('ResultadoAprendizajeService', () => {
  let service: ResultadoAprendizajeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultadoAprendizajeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
