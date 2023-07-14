import { TestBed } from '@angular/core/testing';

import { PdfReaderService } from './pdf-reader.service';

describe('PdfReaderService', () => {
  let service: PdfReaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PdfReaderService]
    });
    service = TestBed.inject(PdfReaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
