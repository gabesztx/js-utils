import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../reducers';
import { AdItem } from '../../ad-item';

@Component({
  selector: 'app-ad-container',
  templateUrl: './ad-container.component.html',
  styleUrls: ['./ad-container.component.scss']
})
export class AdContainerComponent implements OnInit {
  @Input() ads: AdItem[];

  constructor(private store: Store<fromStore.State>) {
  }

  ngOnInit() {
    console.log('ads:', this.ads);
  }

}
