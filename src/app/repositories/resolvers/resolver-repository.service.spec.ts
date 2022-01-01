import { TestBed } from '@angular/core/testing';

import { ResolverRepositoryService } from './resolver-repository.service';

describe('ResolverRepositoryService', () => {
  let service: ResolverRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResolverRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
