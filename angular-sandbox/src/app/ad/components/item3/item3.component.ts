import { Component, Input, OnInit } from '@angular/core';
import { AdComponent } from '../../models/ad.model';

@Component({
  templateUrl: './item3.component.html',
  styleUrls: ['./item3.component.scss']
})
export class Item3Component implements OnInit, AdComponent {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
