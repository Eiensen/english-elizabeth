import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { TestCard } from 'src/app/models/testCard';

@Component({
  selector: 'app-list-of-cards',
  templateUrl: './list-of-cards.component.html',
  styleUrls: ['./list-of-cards.component.css']
})
export class ListOfCardsComponent{ 
  @Input() cards!: TestCard[];
  @Output() onCardSelected = new EventEmitter<number>();  

  onCardClicked(indx: number): void{
    this.onCardSelected.emit(indx);
  }
}
