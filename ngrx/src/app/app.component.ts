import { Component, OnInit } from '@angular/core';
// import { select, Store } from '@ngrx/store';
// import * as fromMain from './reducers';
// import * as fromGame from './game/reducers';
// import { LoadCards } from './game/actions/other.actions';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}


/*
loadCards: Observable<boolean>;

constructor(private store: Store<fromMain.MainState>) {
  this.loadCards = this.store.pipe(select(fromGame.getIsLoading));

}

ngOnInit() {
  this.loadCards.subscribe(
    value => console.log('VALUE ', value)
  );
  setTimeout(() => {
    console.log('Diptach');
    this.store.dispatch(new LoadCards());
  }, 3000);
}*/
