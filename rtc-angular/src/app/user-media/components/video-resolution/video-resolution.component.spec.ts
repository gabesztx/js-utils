import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoResolutionComponent } from './video-resolution.component';

describe('VideoResolutionComponent', () => {
  let component: VideoResolutionComponent;
  let fixture: ComponentFixture<VideoResolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoResolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoResolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
