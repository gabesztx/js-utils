import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeerconnectionComponent } from './peerconnection.component';

describe('PeerconnectionComponent', () => {
  let component: PeerconnectionComponent;
  let fixture: ComponentFixture<PeerconnectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeerconnectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeerconnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
