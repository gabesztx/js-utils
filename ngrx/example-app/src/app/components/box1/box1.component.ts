import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as fromRoot from "../../reducers";
import * as fromNumberHandler from "../../actions/numberHandler";
import { AddIdNumberAction } from "../../actions/numberHandler";

@Component({
  selector: 'bc-box1',
  templateUrl: './box1.component.html',
  styleUrls: ['./box1.component.css']
})
export class Box1Component implements OnInit {
  constructor(private store: Store<fromRoot.State>) { }
  ngOnInit() {}

  addValue(){
    this.store.dispatch(new fromNumberHandler.AddNumberAction());
  }
  removeValue(){
    this.store.dispatch(new fromNumberHandler.RemoveNumberAction());
  }
  addId(){
    this.store.dispatch(new fromNumberHandler.AddIdNumberAction);
  }
  removeId(){
    this.store.dispatch(new fromNumberHandler.RemoveIdNumberAction());
  }
}
