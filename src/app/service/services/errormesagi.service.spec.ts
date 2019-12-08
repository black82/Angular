import {TestBed} from '@angular/core/testing';

import {ErrormesagiService} from './errormesagi.service';

describe('ErrormesagiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErrormesagiService = TestBed.get(ErrormesagiService);
    expect(service).toBeTruthy();
  });
});
