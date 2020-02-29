import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharingModulesComponent } from './sharing-modules.component';

describe('SharingModulesComponent', () => {
  let component: SharingModulesComponent;
  let fixture: ComponentFixture<SharingModulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharingModulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharingModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
