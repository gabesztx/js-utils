import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailListItemComponent } from './course-detail-list-item.component';

describe('CourseDetailListItemComponent', () => {
  let component: CourseDetailListItemComponent;
  let fixture: ComponentFixture<CourseDetailListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseDetailListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDetailListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
