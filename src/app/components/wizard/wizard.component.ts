import { Component, Input } from '@angular/core';
import { NavigationActions } from 'src/app/enums/navigationActions';
import { AnswerKeys } from 'src/app/models/answerKeys';
import { TestCard } from 'src/app/models/testCard';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent {
  @Input() answerKeys!: AnswerKeys;
  @Input() cards!: TestCard[];
  public currentCard!: TestCard;
  public isCardFirst!: boolean;
  public isCardLast!: boolean;

  constructor(){
  }

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

  onCardSelected(e: number){
    this.setActiveCurrentCard(e);
    this.checkActiveBtns();
  }

  onAnswered(e: number){
    if(this.answerKeys.dictionary[this.cards.indexOf(this.currentCard)].key === e){
      this.currentCard.rightAnswer = true
    }else{
      this.currentCard.rightAnswer = false;
    } 
  }

  private handleNavigation(nav: NavigationActions) {
    let index = this.cards?.indexOf(this.currentCard);
    switch (nav) {
      case NavigationActions.backward:
        if (this.cards && index > 0) this.setActiveCurrentCard(--index);
        break;
      case NavigationActions.forward:
        if (this.cards && index >=0 ) this.setActiveCurrentCard(++index);
        break;
      case NavigationActions.done:
        if (this.cards && index) this.setActiveCurrentCard(++index);
        break;

      default:
        break;

        
    }
  }

  private setActiveCurrentCard(index:number): void{
    this.currentCard.isActive = false;
          this.currentCard = this.cards[index];
          this.currentCard.isActive = true;
  }

  private checkActiveBtns(){
    this.isCardFirst = this.currentCard.question === this.cards[0].question ? true : false;
    this.isCardLast = this.currentCard.question === this.cards[this.cards.length - 1].question ? true : false;
  }
}
