import { Component, Input, OnInit } from '@angular/core';
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

  
}
