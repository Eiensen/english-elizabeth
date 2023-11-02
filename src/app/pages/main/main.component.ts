import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  public title = 'EngGame';
  isStart: boolean = false; 

  
  onTestStart(e:boolean){
    this.isStart = e;
  }
}
