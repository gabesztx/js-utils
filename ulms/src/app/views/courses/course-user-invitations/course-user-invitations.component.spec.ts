import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseUserInvitationsComponent } from './course-user-invitations.component';

describe('CourseUserInvitationsComponent', () => {
  let component: CourseUserInvitationsComponent;
  let fixture: ComponentFixture<CourseUserInvitationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseUserInvitationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseUserInvitationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
