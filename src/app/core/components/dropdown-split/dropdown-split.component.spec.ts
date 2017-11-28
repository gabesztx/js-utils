import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDropdownSplitComponent } from './demo-dropdown-split.component';

describe('DemoDropdownSplitComponent', () => {
  let component: DemoDropdownSplitComponent;
  let fixture: ComponentFixture<DemoDropdownSplitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoDropdownSplitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDropdownSplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
