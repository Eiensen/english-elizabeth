import { Component, OnInit } from '@angular/core';
import { PdfReaderService } from 'src/app/services/pdf-reader.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-placement-test',
  templateUrl: './placement-test.component.html',
  styleUrls: ['./placement-test.component.css']
})
export class PlacementTestComponent implements OnInit{

  constructor(private pdfReader: PdfReaderService, private http: HttpClient){}

  pdfParsedText: string = '';
  qArray: string[] = [];

  ngOnInit(): void {
    // this.pdfReader.readPdf('../../assets/Outcomes_Placement_Test.pdf')
    //   .then(text => this.pdfParsedText = text, reason => console.error(reason));
    this.http.get('../../assets/placement_test.txt', {responseType: 'text'}).subscribe(data => {
      this.pdfParsedText = data;
      this.qArray = this.pdfParsedText.split('|');
      console.log(this.qArray);
      
    });
  }
  
}
