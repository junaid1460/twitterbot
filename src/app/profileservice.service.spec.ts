import { TestBed, inject } from '@angular/core/testing';

import { ProfileserviceService } from './profileservice.service';

describe('ProfileserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileserviceService]
    });
  });

  it('should be created', inject([ProfileserviceService], (service: ProfileserviceService) => {
    expect(service).toBeTruthy();
  }));
});
