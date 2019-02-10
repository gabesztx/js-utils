import { Injectable } from '@angular/core';
import { AdItem } from '../ad-item';
import { Item1Component } from '../components/item1/item1.component';
import { Item2Component } from '../components/item2/item2.component';
import { Item3Component } from '../components/item3/item3.component';

@Injectable()
export class AdService {
  getAds() {
    return [
      new AdItem(
        Item1Component,
        {
          name: 'Bombasto',
          bio: 'Brave as they come'
        }
      ),
      new AdItem(
        Item2Component,
        {
          name: 'Dr IQ',
          bio: 'Smart as they come'
        }
      ),
      new AdItem(
        Item3Component,
        {
          name: 'Dr Strange',
          bio: 'salamonder male'
        }
      ),
    ];
  }
}
