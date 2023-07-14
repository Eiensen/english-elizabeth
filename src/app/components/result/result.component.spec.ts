import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultComponent } from './result.component';
import { LevelToStringPipe } from 'src/app/pipes/level-to-string.pipe';
import { FormsModule } from '@angular/forms';
import { LevelDescription } from 'src/app/enums/levelDescription';

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        ResultComponent,
        LevelToStringPipe 
      ],
      imports: [FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onClickSendResult() should be truthy', () => {
    component.onClickSendResult();
    expect(component.onClickSendResult).toBeTruthy();
  })

  it('TotalPoints < 18 - level should be Elementary', () => {
    component.totalPoints = 5;
    component.ngOnInit();
    expect(component.levelDescription).toBe(LevelDescription.elementary);
  })
  it('TotalPoints < 25 - level should be preIntermediate', () => {
    component.totalPoints = 20;
    component.ngOnInit();
    expect(component.levelDescription).toBe(LevelDescription.preIntermediate);
  })
  it('TotalPoints < 32 - level should be intermediate', () => {
    component.totalPoints = 30;
    component.ngOnInit();
    expect(component.levelDescription).toBe(LevelDescription.intermediate);
  })
  it('TotalPoints < 39 - level should be upperIntermediate', () => {
    component.totalPoints = 35;
    component.ngOnInit();
    expect(component.levelDescription).toBe(LevelDescription.upperIntermediate);
  })
  it('TotalPoints < 46 - level should be advanced', () => {
    component.totalPoints = 45;
    component.ngOnInit();
    expect(component.levelDescription).toBe(LevelDescription.advanced);
  })
  it('TotalPoints < 50 - level should be higherLevel', () => {
    component.totalPoints = 48;
    component.ngOnInit();
    expect(component.levelDescription).toBe(LevelDescription.higherLevel);
  })
});
