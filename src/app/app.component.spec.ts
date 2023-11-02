import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FromTxtToTestCardsService } from './services/from-txt-to-test-card.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

describe('AppComponent', () => {
  let service: FromTxtToTestCardsService;
  let fixture: ComponentFixture<AppComponent>;  
  const fakeHttpGet = {get: () => new Observable<string[]>}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers:[
        FromTxtToTestCardsService, 
        {provide: HttpClient, useValue: fakeHttpGet}     
      ]
    }).compileComponents();
    
    service = TestBed.inject(FromTxtToTestCardsService);
    fixture = TestBed.createComponent(AppComponent);
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
    
});
