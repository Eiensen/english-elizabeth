import { Injectable } from '@angular/core';
import * as pdfjsLib from 'pdfjs-dist';
import { TextItem } from 'pdfjs-dist/types/src/display/api';

@Injectable({
  providedIn: 'root'
})
export class PdfReaderService {

  constructor() { 
    pdfjsLib.GlobalWorkerOptions.workerSrc = '../assets/pdf.worker.js';
  }

  public async readPdf(pdfUrl: string): Promise<string> {
    const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
    const countPromises = []; // collecting all page promises
    for (let i = 1; i <= pdf._pdfInfo.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      countPromises.push(textContent.items.map((s) => (s as TextItem).str).join(''));
    }
    const pageContents = await Promise.all(countPromises);
    return pageContents.join('');
  }
}
