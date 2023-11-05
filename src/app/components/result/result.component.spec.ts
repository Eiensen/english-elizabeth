import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultComponent } from './result.component';
import { FormsModule } from '@angular/forms';
import { LevelDescription } from 'src/app/enums/levelDescription';

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        ResultComponent,
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
});
