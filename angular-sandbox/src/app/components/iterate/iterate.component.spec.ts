import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IterateComponent } from './iterate.component';

describe('IterateComponent', () => {
  let component: IterateComponent;
  let fixture: ComponentFixture<IterateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IterateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IterateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
