import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAd from '../../reducers';
import { AdService } from '../../services/ad.service';
import { AdItem } from '../../ad-item';

@Component({
  selector: 'app-ad-page',
  templateUrl: './ad-page.component.html',
  styleUrls: ['./ad-page.component.scss']
})
export class AdPageComponent implements OnInit {
  ads: AdItem[];

  constructor(private store: Store<fromAd.State>,
              private adService: AdService) {}

  ngOnInit() {
    // console.log(this.ads);
  }

}
