import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Output() onStartClick = new EventEmitter<boolean>();

  Start(): void{
    this.onStartClick.emit(true);
  }
}
