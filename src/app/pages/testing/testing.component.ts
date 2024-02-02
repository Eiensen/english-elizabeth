import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AnswerKeys } from 'src/app/models/answerKeys';
import { TestCard } from 'src/app/models/testCard';
import { FromTxtToTestCardsService } from 'src/app/services/from-txt-to-test-card.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent {
  @Input() isShowTest!: boolean;
  @Output() onTestFinish = new EventEmitter<boolean>();
  public isStart: boolean = false;
  public cards: TestCard[];
  public answerKeys: AnswerKeys;

  constructor(public testCardService: FromTxtToTestCardsService, ){
    this.testCardService.Init()
    this.cards = this.testCardService.AllCards;
    this.answerKeys = new AnswerKeys();
    this.isStart = false;
  }
  
  onTestStart(e:boolean){
    this.isStart = e;
  }

  onTestEnd(event: boolean){
    this.onTestFinish.emit(event);
  }
}
