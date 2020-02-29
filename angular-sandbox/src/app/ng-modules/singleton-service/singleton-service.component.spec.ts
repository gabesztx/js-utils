import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingletonServiceComponent } from './singleton-service.component';

describe('SingletonServiceComponent', () => {
  let component: SingletonServiceComponent;
  let fixture: ComponentFixture<SingletonServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingletonServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingletonServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
