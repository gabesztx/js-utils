import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAuth from '../../reducers';
import * as fromAd from "../../../ad/reducers";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  value = 0;

  constructor(private store: Store<fromAuth.State>) {
  }

  ngOnInit() {
    setInterval(() => {
      this.value++;
    }, 1000);
    // console.log('LoginPageComponent');
    // this.http.get(this.apiIpUrl)
    // console.log('LoginPageComponent');
  }

}
/*
@ViewChild('textValue')
textValue: ElementRef;

constructor(private store: Store<fromAd.State>) {
}

ngOnInit() {
  setInterval(
    () => {
      console.log('textValue: ', this.textValue.nativeElement.value);
    }, 50);
  // console.log('AdPageComponent', this.textValue);
}
ngAfterViewInit() {
  // console.log('ngAfterViewInit');
}*/
