import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusTextComponent } from './status-text.component';

describe('StatusTextComponent', () => {
  let component: StatusTextComponent;
  let fixture: ComponentFixture<StatusTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
