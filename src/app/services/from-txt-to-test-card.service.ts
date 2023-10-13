import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TestCard } from '../models/testCard';
import { Answer } from "../models/Answer";

@Injectable({
  providedIn: 'root'
})
export class FromTxtToTestCardsService {

  private pdfParsedText: string = '';
  private qArray: string[] = [];
  private allCards: TestCard[] = [];

  public get AllCards(): TestCard[]{
    return this.allCards;
  }

  constructor(private http: HttpClient) { }

  Init():void{
    this.http.get('../../assets/placement_test.txt', {responseType: 'text'}).subscribe(data => {
      this.pdfParsedText = data;
      this.qArray = this.pdfParsedText.split('`');
      this.qArray.forEach(c=>{
        if(c.length < 2)
        {   }
        else{
          var tempArray = c.split(/\|{2}/g);          
          this.allCards.push(new TestCard(
            tempArray[0],
            [new Answer(tempArray[1].slice(2), false, null),
            new Answer(tempArray[2].slice(2), false, null),
            new Answer(tempArray[3].slice(2), false, null)],
            null,
            false
          ))
        }        
      })
    });  
  }
  
}
