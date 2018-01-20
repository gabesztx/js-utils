import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailFeedComponent } from './course-detail-feed.component';

describe('CourseDetailFeedComponent', () => {
  let component: CourseDetailFeedComponent;
  let fixture: ComponentFixture<CourseDetailFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseDetailFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDetailFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
