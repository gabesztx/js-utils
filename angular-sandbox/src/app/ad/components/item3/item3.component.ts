import { Component, Input, OnInit } from '@angular/core';
import { AdComponent } from '../../models/ad.model';

@Component({
  selector: 'app-item3',
  templateUrl: './item3.component.html',
  styleUrls: ['./item3.component.scss']
})
export class Item3Component implements OnInit, AdComponent {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
