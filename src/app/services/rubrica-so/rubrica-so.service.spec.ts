import { TestBed } from '@angular/core/testing';

import { RubricaSOService } from './rubrica-so.service';

describe('RubricaSOService', () => {
  let service: RubricaSOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RubricaSOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
