import { Component } from '@angular/core';
import { FromTxtToTestCardsService } from './services/from-txt-to-test-card.service';
import { TestCard } from './models/testCard';
import { AnswerKeys } from './models/answerKeys';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'EngGame';
  isStart: boolean = false;
  public cards: TestCard[];
  public answerKeys: AnswerKeys;

  constructor(public testCardService: FromTxtToTestCardsService, ){
    this.testCardService.Init()
    this.cards = this.testCardService.AllCards;
    this.answerKeys = new AnswerKeys();
  }  
  
  onTestStart(e:boolean){
    this.isStart = e;
  }
}
