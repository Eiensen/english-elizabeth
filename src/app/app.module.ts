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
import { FooterComponent } from './components/footer/footer.component';
import { TestingComponent } from './pages/testing/testing.component';
import { MainComponent } from './pages/main/main.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { FrontpageComponent } from './pages/frontpage/frontpage.component';
import { HeaderScrollDirective } from './directives/header-scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    PlacementTestComponent,
    WizardComponent,
    ListOfCardsComponent,
    ResultComponent,
    FooterComponent,
    TestingComponent,
    MainComponent,
    FrontpageComponent,
    HeaderScrollDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RadioButtonModule,
    HttpClientModule,
    ButtonModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())
  ],
  providers: [
    FromTxtToTestCardsService, 
    ScreenTrackingService,
    UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
