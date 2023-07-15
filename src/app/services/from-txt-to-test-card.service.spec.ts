import { TestBed } from '@angular/core/testing';

import { FromTxtToTestCardsService } from './from-txt-to-test-card.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable, of } from 'rxjs';

fdescribe('FromTxtToTestCardService', () => {
  let service: FromTxtToTestCardsService;
  let http: HttpClient;
  
  const fakeHttpClient = {
    get: function(): Observable<string>{
      return new Observable<string>
    }
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FromTxtToTestCardsService,
        {provide: HttpClient, useValue: fakeHttpClient}
      ]
    });
    service = TestBed.inject(FromTxtToTestCardsService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeDefined();
  });

  it('Init() should call http.get()', () =>{
    service.Init();
    expect(service.AllCards[0].question).toContain('1');
  })
});
