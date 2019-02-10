import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAd from '../../reducers';

@Component({
  selector: 'app-ad-page',
  templateUrl: './ad-page.component.html',
  styleUrls: ['./ad-page.component.css']
})
export class AdPageComponent implements OnInit {

  constructor(private store: Store<fromAd.State>) { }

  ngOnInit() {
    console.log('AdPageComponent');
  }

}
