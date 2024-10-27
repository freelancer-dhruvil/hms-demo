import { TestBed } from '@angular/core/testing';

import { TableListingService } from './table-listing.service';

describe('TableListingService', () => {
  let service: TableListingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableListingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
