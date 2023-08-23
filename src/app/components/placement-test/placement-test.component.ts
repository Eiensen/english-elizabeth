import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavigationActions } from 'src/app/enums/navigationActions';
import { TestCard } from 'src/app/models/testCard';

@Component({
  selector: 'app-placement-test',
  templateUrl: './placement-test.component.html',
  styleUrls: ['./placement-test.component.css'],
})
export class PlacementTestComponent {
  @Input() card!: TestCard;
  @Input() isCardFirst!: boolean;
  @Input() isCardLast!: boolean;
  @Input() isCardForTesting!: boolean;
  @Output() onAction = new EventEmitter<NavigationActions>();
  @Output() onAnswered = new EventEmitter<number>();

  public isAnswered: boolean = false;
  public checkedClass = (index: number) => {
    if (this.isCardForTesting)
      return {
        checked: this.card.answers[index].isChecked,
      };
    else
      return {
        wrong:
          !this.card.answers[index].isRight &&
          this.card.answers[index].isChecked,
        right:
          this.card.answers[index].isRight &&
          this.card.answers[index].isChecked,
      };
  };

  onClickNext() {
    this.onAction.emit(NavigationActions.forward);
  }

  onClickBack() {
    this.onAction.emit(NavigationActions.backward);
  }

  onClickDone() {
    this.onAction.emit(NavigationActions.done);
  }

  answered(index: number) {
    this.onAnswered.emit(index);
  }
}
