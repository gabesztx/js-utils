import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflectMetadataComponent } from './reflect-metadata.component';

describe('ReflectMetadataComponent', () => {
  let component: ReflectMetadataComponent;
  let fixture: ComponentFixture<ReflectMetadataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReflectMetadataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReflectMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
