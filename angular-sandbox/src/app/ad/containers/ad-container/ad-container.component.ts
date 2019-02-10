import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../reducers';
import { AdItem } from '../../ad-item';
import { AdDirective } from '../../directive/ad.directive';
import { AdComponent } from '../../models/ad.model';

@Component({
  selector: 'app-ad-container',
  templateUrl: './ad-container.component.html',
  styleUrls: ['./ad-container.component.scss']
})
export class AdContainerComponent implements OnInit {
  @Input() ads: AdItem[];
  @ViewChild(AdDirective) componentContainer: AdDirective;
  currentAdIndex = 0;
  interval: any;
  componentItems = [];

  constructor(private store: Store<fromStore.State>,
              private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }

  loadComponent() {
    // this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const item = this.ads[this.currentAdIndex];
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(item.component);
    const viewContainerRef = this.componentContainer.viewContainerRef;
    // // viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    const component = (componentRef.instance as AdComponent);
    component.data = item.data;
    this.componentItems.push(component);
    if (this.currentAdIndex === this.ads.length - 1) {
      setTimeout(() => {
        this.componentItems[0].data.name = 'Gabesz';
      }, 2000);

      clearInterval(this.interval);
    }
    this.currentAdIndex++;
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 2000);
  }

}
