import { Component, Input, OnInit } from '@angular/core';
import { AdComponent } from '../../models/ad.model';

@Component({
  selector: 'app-item2',
  templateUrl: './item2.component.html',
  styleUrls: ['./item2.component.scss']
})
export class Item2Component implements OnInit, AdComponent {
  @Input() data: any;

  constructor() {
  }

  ngOnInit() {
  }

}
