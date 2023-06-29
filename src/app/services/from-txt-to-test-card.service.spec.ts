import { TestBed } from '@angular/core/testing';

import { FromTxtToTestCardsService } from './from-txt-to-test-card.service';

describe('FromTxtToTestCardService', () => {
  let service: FromTxtToTestCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FromTxtToTestCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
