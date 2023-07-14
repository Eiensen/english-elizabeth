import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavigationActions } from 'src/app/enums/navigationActions';
import { TestCard } from 'src/app/models/testCard';

@Component({
  selector: 'app-placement-test',
  templateUrl: './placement-test.component.html',
  styleUrls: ['./placement-test.component.css']
})
export class PlacementTestComponent{
  @Input() card!: TestCard | undefined;
  @Input() isCardFirst!: boolean;
  @Input() isCardLast!: boolean;
  @Input() isComplete!: boolean;
  @Output() onAction = new EventEmitter<NavigationActions>();
  @Output() onAnswered = new EventEmitter<number>();

  public isAnswered: boolean = false;

  onClickNext(){
    this.onAction.emit(NavigationActions.forward);
  }

  onClickBack(){
    this.onAction.emit(NavigationActions.backward);
  }

  onClickDone(){
    this.onAction.emit(NavigationActions.done);
  }

  answered(index: number){
    this.onAnswered.emit(index);
  }
 
}
