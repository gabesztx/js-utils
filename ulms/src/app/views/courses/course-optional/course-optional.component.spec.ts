import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseOptionalComponent } from './course-optional.component';

describe('CourseOptionalComponent', () => {
  let component: CourseOptionalComponent;
  let fixture: ComponentFixture<CourseOptionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseOptionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseOptionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
