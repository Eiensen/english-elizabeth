import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent {

  isShowTest: boolean = false; 
  @Input() isShowFrontpage!: boolean;

  
  startTesting(){
    this.isShowTest = !this.isShowTest;
  }
}
