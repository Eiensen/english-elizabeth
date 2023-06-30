import { Component } from '@angular/core';
import { FromTxtToTestCardsService } from './services/from-txt-to-test-card.service';
import { TestCard } from './models/testCard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EngGame';
  isStart: boolean = false;
  public cards: TestCard[];

  constructor(public testCardService: FromTxtToTestCardsService, ){
    this.testCardService.Init()
    this.cards = this.testCardService.AllCards;
  }

  Start(): void{
    this.isStart = !this.isStart;
  }
}
