import { Component } from '@angular/core';
import { Word } from 'src/app/models/word';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  public words: Word[] = [
    { name: 'Leaf', key: 'L', isCorrect: true, correctClass: '' },
    { name: 'Trunk', key: 'T', isCorrect: true, correctClass: '' },
    { name: 'Sun', key: 'S', isCorrect: false, correctClass: '' },
    { name: 'Brick', key: 'B', isCorrect: false, correctClass: '' },
    { name: 'Branch', key: 'Bb', isCorrect: true, correctClass: '' },
    { name: 'Water', key: 'W', isCorrect: true, correctClass: '' },
    { name: 'Roots', key: 'R', isCorrect: true, correctClass: '' }
  ];
  public selectedWord!: Word;
  public correctWords: Word[] = [];
  public isWin: boolean = false;

  public Choose(value: any): void {
    if(value === this.selectedWord) 
    return;

    var idx = this.words.findIndex(w=>w.name === value.name);

    if (value.isCorrect) {
      this.words[idx].correctClass = 'correct';
      this.correctWords.push(this.selectedWord);
      this.correctWords.length == 5 ? this.isWin = true : this.isWin = false;
    } else {
      this.words[idx].correctClass = 'incorrect';
    }
  }
}
