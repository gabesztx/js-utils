import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicMediaComponent } from './basic-media.component';

describe('BasicMediaComponent', () => {
  let component: BasicMediaComponent;
  let fixture: ComponentFixture<BasicMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
