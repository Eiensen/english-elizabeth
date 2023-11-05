import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LevelDescription } from 'src/app/enums/levelDescription';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  @Input() levelDescription!: string;
  @Output() onEndTesting = new EventEmitter<boolean>();
  @Output() onStudentName = new EventEmitter<string>();
  
  public studentName!: string;

  onClickSendResult(){
    this.onEndTesting.emit(true);
    this.onStudentName.emit(this.studentName);
  }
}
