import { TestBed } from '@angular/core/testing';

import { UnoService } from './uno.service';

describe('UnoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnoService = TestBed.get(UnoService);
    expect(service).toBeTruthy();
  });
});
