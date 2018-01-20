import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseUpcomingComponent } from './course-upcoming.component';

describe('CourseUpcomingComponent', () => {
  let component: CourseUpcomingComponent;
  let fixture: ComponentFixture<CourseUpcomingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseUpcomingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
