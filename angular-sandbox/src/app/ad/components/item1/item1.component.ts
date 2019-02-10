import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { AdComponent } from '../../models/ad.model';

@Component({
  selector: 'app-item1',
  templateUrl: './item1.component.html',
  styleUrls: ['./item1.component.scss']
})
export class Item1Component implements OnInit, OnChanges, AdComponent {
  @Input() data: any;

  constructor() {
  }

  ngOnChanges() {
    // console.log('Item1 changes', this.data);
  }

  ngOnInit() {
    // console.log('Item1 init', this.data);
  }
}
