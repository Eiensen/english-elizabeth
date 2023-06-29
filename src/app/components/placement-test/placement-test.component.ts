import { Component, OnInit } from '@angular/core';
import { TestCard } from 'src/app/models/testCard';
import { FromTxtToTestCardsService } from 'src/app/services/from-txt-to-test-card.service';

@Component({
  selector: 'app-placement-test',
  templateUrl: './placement-test.component.html',
  styleUrls: ['./placement-test.component.css']
})
export class PlacementTestComponent implements OnInit{
  public cards: TestCard[] = [];

  constructor(public testCardService: FromTxtToTestCardsService, ){}

  ngOnInit(): void {
    // this.pdfReader.readPdf('../../assets/Outcomes_Placement_Test.pdf')
    //   .then(text => this.pdfParsedText = text, reason => console.error(reason));
    this.testCardService.Init()
    this.cards = this.testCardService.AllCards;
  }
  
}
