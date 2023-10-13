import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementTestComponent } from './placement-test.component';
import { TestCard } from 'src/app/models/testCard';
import { Answer } from "src/app/models/Answer";

describe('PlacementTestComponent', () => {
  let component: PlacementTestComponent;
  let fixture: ComponentFixture<PlacementTestComponent>;
  let fakeTestCards: TestCard[] = [new TestCard('', [new Answer('', false, false), new Answer('', false, false), new Answer('', false, false)], false, false)];

  const fakeComponentMethods = jasmine.createSpyObj(['onClickNext', 'onClickBack', 'onClickDone', 'answered'])

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacementTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacementTestComponent);
    component = fixture.componentInstance;
    component.card = fakeTestCards[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onClickNext() should be truthy', () => {
    component.onClickNext();
    expect(component.onClickNext).toBeTruthy();
  })

  it('onClickBack() should be truthy', () => {
    component.onClickBack();
    expect(component.onClickBack).toBeTruthy();
  })

  it('onClickDone() should be truthy', () => {
    component.onClickDone();
    expect(component.onClickDone).toBeTruthy();
  })

  it('answered() should be truthy', () => {
    component.answered(1);
    expect(component.answered).toBeTruthy();
  })
});
