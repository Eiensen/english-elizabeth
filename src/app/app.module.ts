import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RadioButtonModule } from 'primeng/radiobutton';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { PlacementTestComponent } from './components/placement-test/placement-test.component';

@NgModule({
  declarations: [
    AppComponent,
    PlacementTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RadioButtonModule,
    HttpClientModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
