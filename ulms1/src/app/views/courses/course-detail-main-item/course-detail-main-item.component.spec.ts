import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailMainItemComponent } from './course-detail-main-item.component';

describe('CourseDetailMainItemComponent', () => {
  let component: CourseDetailMainItemComponent;
  let fixture: ComponentFixture<CourseDetailMainItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseDetailMainItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDetailMainItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
