import { Component, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NavigationActions } from 'src/app/enums/navigationActions';
import { AnswerKeys } from 'src/app/models/answerKeys';
import { TestCard } from 'src/app/models/testCard';
import { jsPDF } from 'jspdf';
import { getDatabase, ref, set, push } from 'firebase/database';
import { AngularFireModule } from '@angular/fire/compat';
import { initializeApp } from '@angular/fire/app';
import { LevelDescription } from 'src/app/enums/levelDescription';
import { DbCard } from 'src/app/models/dbCard';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css'],
})
export class WizardComponent {
  @Input() answerKeys!: AnswerKeys;
  @Input() cards!: TestCard[];
  public currentCard!: TestCard;
  public isCardFirst!: boolean;
  public isCardLast!: boolean;
  public isComplete: boolean = false;
  public totalPoints: number = 0;
  public isEndTesting: boolean = false;
  public completeCards: TestCard[] = [];

  private doc = new jsPDF();

  constructor(private database: DatabaseService) {}

  ngOnInit(): void {
    // this.pdfReader.readPdf('../../assets/Outcomes_Placement_Test.pdf')
    //   .then(text => this.pdfParsedText = text, reason => console.error(reason));

    this.currentCard = this.cards[0];
    this.currentCard.isActive = true;
    this.checkActiveBtns();
  }

  handleActions(e: NavigationActions) {
    this.handleNavigation(e);
    this.checkActiveBtns();
  }

  onCardSelected(e: number) {
    this.setActiveCurrentCard(e);
    this.checkActiveBtns();
  }

  onEndTesting(e: boolean) {
    this.isEndTesting = e;
  }
  onSendResultToDb(e: string) {
    var cardsToDb: DbCard[] = []
    this.completeCards.map(c=>{
      var checked = c.answers.find(a=>a.isChecked);
      if(checked)
      cardsToDb.push({
        question: c.question, 
        answer: checked?.answer,
        isRight: c.rightAnswer
      })
    })
    this.database.push(e, this.getLevelDescription(), cardsToDb, new Date());     
  }

  onAnswered(e: number) {
    if (
      this.answerKeys.dictionary[this.cards.indexOf(this.currentCard)].key === e
    ) {
      this.currentCard.rightAnswer = true;
      this.cleanAnswersFlags(this.currentCard);
      this.currentCard.answers[e].isChecked = true;
      this.currentCard.answers[e].isRight = true;
    } else {
      this.currentCard.rightAnswer = false;
      this.cleanAnswersFlags(this.currentCard);
      this.currentCard.answers[e].isChecked = true;
      this.currentCard.answers[e].isRight = false;
    }
  }

  getLevelDescription(): string {
    var levelDescription: LevelDescription = new LevelDescription(this.totalPoints);
   
    return levelDescription.name;
  }

  private handleNavigation(nav: NavigationActions) {
    let index = this.cards?.indexOf(this.currentCard);
    switch (nav) {
      case NavigationActions.backward:
        if (this.cards && index > 0) this.setActiveCurrentCard(--index);
        break;
      case NavigationActions.forward:
        if (this.cards && index >= 0) {
          this.setActiveCurrentCard(++index);
        }
        break;
      case NavigationActions.done:
        if (this.cards && index) {
          this.setActiveCurrentCard(index);
          this.completeCards = this.cards;
          this.isComplete = true;

          console.log('Your total points: ' + this.totalPoints);
        }
        break;

      default:
        break;
    }
  }

  private cleanAnswersFlags(card: TestCard): void {
    card.answers.forEach((a) => {
      a.isChecked = false;
      a.isRight = false;
    });
  }

  private cleanAllCards() {
    this.cards.forEach((c) => {
      c.isActive = false;
      c.rightAnswer = null;
      this.cleanAnswersFlags(c);
    });
  }

  private setActiveCurrentCard(index: number): void {
    this.currentCard.isActive = false;

    if (this.currentCard.rightAnswer) this.totalPoints++;

    this.currentCard = this.cards[index];

    if (this.isCardLast) return;

    this.currentCard.isActive = true;
  }

  private checkActiveBtns(): void {
    this.isCardFirst =
      this.currentCard.question === this.cards[0].question ? true : false;
    this.isCardLast =
      this.currentCard.question === this.cards[this.cards.length - 1].question
        ? true
        : false;
  }
}
