import { TestBed } from '@angular/core/testing';

import { HomeRoutingResolver } from './home-routing.resolver';

describe('HomeRoutingResolver', () => {
  let resolver: HomeRoutingResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(HomeRoutingResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
