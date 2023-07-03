import { Component, Input } from '@angular/core';
import { NavigationActions } from 'src/app/enums/navigationActions';
import { TestCard } from 'src/app/models/testCard';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent {

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
    this.currentCard.isActive = false;
    this.currentCard = this.cards[e];
    this.currentCard.isActive = true;
    this.checkActiveBtns();
  }

  private handleNavigation(nav: NavigationActions) {
    let index = this.cards?.indexOf(this.currentCard);
    switch (nav) {
      case NavigationActions.backward:
        if (this.cards && index > 0) {
          this.currentCard.isActive = false;
          this.currentCard = this.cards[--index]; 
          this.currentCard.isActive = true;
        }       
        break;
      case NavigationActions.forward:
        if (this.cards && index >=0 ) {
          this.currentCard.isActive = false;
          this.currentCard = this.cards[++index];
          this.currentCard.isActive = true;
        }
        break;
      case NavigationActions.done:
        if (this.cards && index) {
          this.currentCard.isActive = false;
          this.currentCard = this.cards[++index];
          this.currentCard.isActive = true;
        }
        break;

      default:
        break;

        
    }
  }

  private checkActiveBtns(){
    this.isCardFirst = this.currentCard.question === this.cards[0].question ? true : false;
    this.isCardLast = this.currentCard.question === this.cards[this.cards.length - 1].question ? true : false;
  }
}
