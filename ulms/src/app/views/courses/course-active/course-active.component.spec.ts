import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseActiveComponent } from './course-active.component';

describe('CourseActiveComponent', () => {
  let component: CourseActiveComponent;
  let fixture: ComponentFixture<CourseActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
