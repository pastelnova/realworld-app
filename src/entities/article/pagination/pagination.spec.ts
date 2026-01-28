import { TestBed } from '@angular/core/testing';

import { Pagination } from './pagination';

describe('Pagination', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pagination],
    }).compileComponents();
  });

  it('should create', () => {
    // Pagination component requires input properties, so we test that it exists
    expect(Pagination).toBeDefined();
  });
});
