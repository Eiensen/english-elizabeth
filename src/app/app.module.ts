import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RadioButtonModule } from 'primeng/radiobutton';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { PlacementTestComponent } from './components/placement-test/placement-test.component';
import { FromTxtToTestCardsService } from './services/from-txt-to-test-card.service';
import { WizardComponent } from './components/wizard/wizard.component';
import { ListOfCardsComponent } from './components/list-of-cards/list-of-cards.component';
import { ResultComponent } from './components/result/result.component';
import { LevelToStringPipe } from './pipes/level-to-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PlacementTestComponent,
    WizardComponent,
    ListOfCardsComponent,
    ResultComponent,
    LevelToStringPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RadioButtonModule,
    HttpClientModule,
    ButtonModule
  ],
  providers: [FromTxtToTestCardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
