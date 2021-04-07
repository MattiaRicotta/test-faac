import { TestBed } from '@angular/core/testing';

import { EnhancersDesignSystemService } from './enhancers-design-system.service';

describe('EnhancersDesignSystemService', () => {
  let service: EnhancersDesignSystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnhancersDesignSystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
