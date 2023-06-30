import { Component, Input, OnInit } from '@angular/core';
import { TestCard } from 'src/app/models/testCard';

@Component({
  selector: 'app-placement-test',
  templateUrl: './placement-test.component.html',
  styleUrls: ['./placement-test.component.css']
})
export class PlacementTestComponent{
  @Input() card!: TestCard;
  @Input() isCardFirst!: boolean;
  @Input() isCardLast!: boolean;
 
}
