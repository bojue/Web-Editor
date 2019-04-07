import { TestBed } from '@angular/core/testing';

import { MockLsService } from './mock-ls.service';

describe('MockLsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockLsService = TestBed.get(MockLsService);
    expect(service).toBeTruthy();
  });
});
