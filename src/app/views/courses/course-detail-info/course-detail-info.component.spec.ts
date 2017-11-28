import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailInfoComponent } from './course-detail-info.component';

describe('CourseDetailInfoComponent', () => {
  let component: CourseDetailInfoComponent;
  let fixture: ComponentFixture<CourseDetailInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseDetailInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDetailInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
