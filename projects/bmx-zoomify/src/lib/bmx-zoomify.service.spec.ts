import { TestBed } from '@angular/core/testing';

import { BmxZoomifyService } from './bmx-zoomify.service';

describe('BmxZoomifyService', () => {
  let service: BmxZoomifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BmxZoomifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
