import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailuploadComponent } from './emailupload.component';

describe('EmailuploadComponent', () => {
  let component: EmailuploadComponent;
  let fixture: ComponentFixture<EmailuploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailuploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
