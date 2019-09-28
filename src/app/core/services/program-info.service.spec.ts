import { TestBed, inject } from '@angular/core/testing';

import { ProgramInfoService } from './program-info.service';

describe('ProgramInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgramInfoService]
    });
  });

  it('should be created', inject([ProgramInfoService], (service: ProgramInfoService) => {
    expect(service).toBeTruthy();
  }));
});
