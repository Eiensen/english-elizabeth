import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LevelDescription } from 'src/app/enums/levelDescription';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() totalPoints!: number;
  @Output() onEndTesting = new EventEmitter<boolean>();

  public levelDescription!: LevelDescription;
  public studentName!: string;

  ngOnInit(): void {
    if(this.totalPoints >= 0 && this.totalPoints <=18) this.levelDescription = LevelDescription.elementary;
    if(this.totalPoints >= 19 && this.totalPoints <=25) this.levelDescription = LevelDescription.preIntermediate;
    if(this.totalPoints >= 26 && this.totalPoints <=32) this.levelDescription = LevelDescription.intermediate;
    if(this.totalPoints >= 33 && this.totalPoints <=39) this.levelDescription = LevelDescription.upperIntermediate;
    if(this.totalPoints >= 40 && this.totalPoints <=46) this.levelDescription = LevelDescription.advanced;
    if(this.totalPoints >= 47 && this.totalPoints <=50) this.levelDescription = LevelDescription.higherLevel;
  }

  onClickSendResult(){
    this.onEndTesting.emit(true);
  }
}
