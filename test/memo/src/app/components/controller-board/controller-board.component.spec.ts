import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllerBoardComponent } from './controller-board.component';

describe('ControllerBoardComponent', () => {
  let component: ControllerBoardComponent;
  let fixture: ComponentFixture<ControllerBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControllerBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllerBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
