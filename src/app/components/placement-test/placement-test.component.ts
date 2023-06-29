import { Component, OnInit } from '@angular/core';
import { PdfReaderService } from 'src/app/services/pdf-reader.service';
import { HttpClient } from '@angular/common/http';
import { TestCard } from 'src/app/models/testCard';

@Component({
  selector: 'app-placement-test',
  templateUrl: './placement-test.component.html',
  styleUrls: ['./placement-test.component.css']
})
export class PlacementTestComponent implements OnInit{

  constructor(private pdfReader: PdfReaderService, private http: HttpClient){}

  pdfParsedText: string = '';
  qArray: string[] = [];
  allCards: TestCard[] = [];

  ngOnInit(): void {
    // this.pdfReader.readPdf('../../assets/Outcomes_Placement_Test.pdf')
    //   .then(text => this.pdfParsedText = text, reason => console.error(reason));
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
            new Array<string>(tempArray[1], tempArray[2], tempArray[3]),
            2
          ))
        }        
      })
    });  
  }
  
}
