import { TestBed, inject } from '@angular/core/testing';

import { CanDeactivateAuthGuardService } from './can-deactivate-auth-guard.service';

describe('CanDeactivateAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanDeactivateAuthGuardService]
    });
  });

  it('should be created', inject([CanDeactivateAuthGuardService], (service: CanDeactivateAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
