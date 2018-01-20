import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordingMenuComponent } from './according-menu.component';

describe('AccordingMenuComponent', () => {
  let component: AccordingMenuComponent;
  let fixture: ComponentFixture<AccordingMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordingMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordingMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
