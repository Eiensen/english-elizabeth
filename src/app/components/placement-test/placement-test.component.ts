import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavigationActions } from 'src/app/enums/navigationActions';
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
  @Output() onAction = new EventEmitter<NavigationActions>();

  onClickNext(){
    this.onAction.emit(NavigationActions.forward);
  }

  onClickBack(){
    this.onAction.emit(NavigationActions.backward);
  }
 
}
