import { Component, Input, OnInit } from '@angular/core';
import { AdComponent } from '../../models/ad.model';

@Component({
  selector: 'app-item1',
  templateUrl: './item1.component.html',
  styleUrls: ['./item1.component.scss']
})
export class Item1Component implements OnInit, AdComponent {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
