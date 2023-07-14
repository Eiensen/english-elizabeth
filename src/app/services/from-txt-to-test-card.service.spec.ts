import { TestBed } from '@angular/core/testing';

import { FromTxtToTestCardsService } from './from-txt-to-test-card.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('FromTxtToTestCardService', () => {
  let service: FromTxtToTestCardsService;
  let http: HttpClient;

  const fakeComponentMethods = jasmine.createSpyObj(['get']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FromTxtToTestCardsService,
        HttpClient,
        HttpHandler 
      ]
    });
    service = TestBed.inject(FromTxtToTestCardsService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('Init() should call http.get()', () =>{
  //   service.Init();
  //   expect(http.get).toBeTruthy();
  // })
});
