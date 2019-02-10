import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAd from '../../reducers';

@Component({
  selector: 'app-ad-page',
  templateUrl: './ad-page.component.html',
  styleUrls: ['./ad-page.component.scss']
})
export class AdPageComponent implements OnInit, AfterViewInit {


  constructor(private store: Store<fromAd.State>) {}

  ngOnInit() {
    console.log('AdPageComponent');
    // console.log('AdPageComponent', this.textValue);
  }
  ngAfterViewInit() {}

}
