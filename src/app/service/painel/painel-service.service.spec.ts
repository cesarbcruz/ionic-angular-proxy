import { TestBed } from '@angular/core/testing';

import { PainelServiceService } from './painel-service.service';

describe('PainelServiceService', () => {
  let service: PainelServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PainelServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
