import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromRoot from "../../reducers";

@Component({
  selector: 'bc-box2',
  templateUrl: './box2.component.html',
  styleUrls: ['./box2.component.css']
})
export class Box2Component implements OnInit {
  valueHandler$: Observable<number>;
  constructor(private store: Store<fromRoot.State>) {
    this.valueHandler$ = this.store.select(fromRoot.getHandlerNumberValue);
  }
  ngOnInit() {}

}
