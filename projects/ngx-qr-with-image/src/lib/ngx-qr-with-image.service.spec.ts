import { TestBed } from '@angular/core/testing';

import { NgxQrWithImageService } from './ngx-qr-with-image.service';

describe('NgxQrWithImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxQrWithImageService = TestBed.get(NgxQrWithImageService);
    expect(service).toBeTruthy();
  });
});
