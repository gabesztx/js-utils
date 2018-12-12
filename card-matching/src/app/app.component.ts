import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Store } from "@ngrx/store";
import * as fromRoot from "./reducers/index.reducer";
import { StartPage, GamePage } from './actions/controller.action';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  navStart: Observable<NavigationStart>;
  constructor(private router: Router, private store: Store<fromRoot.MainState>) {
    this.navStart = router.events.pipe(
      filter(evt => evt instanceof NavigationStart)) as Observable<NavigationStart>;
  }

  ngOnInit() {
    this.navStart.subscribe(evt => {
      const url = evt.url;
      if (url === '/start') {
        this.store.dispatch(new StartPage());
      } else {
        this.store.dispatch(new GamePage());
      }
    });
  }
}
