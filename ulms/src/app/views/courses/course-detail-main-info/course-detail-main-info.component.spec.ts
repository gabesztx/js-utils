import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailMainInfoComponent } from './course-detail-main-info.component';

describe('CourseDetailMainInfoComponent', () => {
  let component: CourseDetailMainInfoComponent;
  let fixture: ComponentFixture<CourseDetailMainInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseDetailMainInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDetailMainInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
