import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardComponent } from './wizard.component';
import { ListOfCardsComponent } from '../list-of-cards/list-of-cards.component';
import { FooterComponent } from '../footer/footer.component';
import { PlacementTestComponent } from '../placement-test/placement-test.component';
import { TestCard } from 'src/app/models/testCard';
import { Answer } from "src/app/models/Answer";
import { AnswerKeys } from 'src/app/models/answerKeys';
import { NavigationActions } from 'src/app/enums/navigationActions';

describe('WizardComponent', () => {
  let component: WizardComponent;
  let fixture: ComponentFixture<WizardComponent>;
  let fakeTestCards: TestCard[] = [new TestCard('', [new Answer('', false, false), new Answer('', false, false), new Answer('', false, false)], false, false)];
  let fakeAnswerKeys: AnswerKeys = new AnswerKeys()

  const fakeComponentMethods = jasmine.createSpyObj([
    'checkActiveBtns', 
    'setActiveCurrentCard', 
    'cleanAllCards', 
    'cleanAnswersFlags',
    'handleNavigation'
  ])

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        WizardComponent,
        ListOfCardsComponent,
        FooterComponent,
        PlacementTestComponent
       ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WizardComponent);
    component = fixture.componentInstance;
    component.cards = fakeTestCards;
    component.answerKeys = fakeAnswerKeys;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('onAnswered() should have call cleanAnswersFlags()', () =>{
  //   component.onAnswered(1);
  //   expect(fakeComponentMethods.cleanAnswersFlags).toHaveBeenCalled();
  // })
  // it('onCardSelected() should have call setActiveCurrentCard()', () =>{
  //   component.onCardSelected(0);
  //   expect(fakeComponentMethods.setActiveCurrentCard).toHaveBeenCalled();
  // })
  it('onEndTesting() should be truthy', () =>{
    component.onEndTesting(true);
    expect(component.onEndTesting).toBeTruthy();
  })
  it('handleActions() should be truthy', () =>{
    component.handleActions(2);
    expect(component.handleActions).toBeTruthy();
  })
  it('ngOnInit() should initial currentCard and currentCard.isActive set to true', () =>{
    component.ngOnInit();
    expect(component.currentCard).not.toBeNull();
    expect(component.currentCard.isActive).toBe(true);
  })
  it('ngOnInit() should initial currentCard and currentCard.isActive set to true', () =>{
    component.ngOnInit();
    expect(fakeComponentMethods.checkActiveBtns).toHaveBeenCalled();
  })
});
