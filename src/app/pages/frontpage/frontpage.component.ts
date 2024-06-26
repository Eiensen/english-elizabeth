import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent {

  //isShowTest: boolean = false; 
  @Input() isShowFrontpage!: boolean;
  @Output() onTestButtonClicked = new EventEmitter<boolean>();

  
  startTesting(){
    //this.isShowTest = !this.isShowTest;
    this.onTestButtonClicked.emit(true);
  }
}
