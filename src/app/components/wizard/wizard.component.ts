import { Component, Input } from '@angular/core';
import { TestCard } from 'src/app/models/testCard';
import { FromTxtToTestCardsService } from 'src/app/services/from-txt-to-test-card.service';

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
    this.currentCard = this.cards[49];
    this.isCardFirst = this.currentCard.question === this.cards[0].question ? true : false;
    this.isCardLast = this.currentCard.question === this.cards[this.cards.length - 1].question ? true : false;
  }
}
