import { Component, OnInit } from '@angular/core';
import { LoginDataService } from '../../services/login-data.service';
import { of, combineLatest } from 'rxjs';
import { combineAll, concatAll, delay, tap } from 'rxjs/operators';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent implements OnInit {

  constructor(private loginDataService: LoginDataService) {
  }

  ngOnInit() {
    const location$ = this.loginDataService.getLocation().pipe(
      // tap(x => console.log('location started...')),
      // delay(2000)
    );
    const sessionId$ = this.loginDataService.getGenerator().pipe(
      // tap(x => console.log('sessionId started...')),
      // delay(2000)
    );
    const book$ = this.loginDataService.getBook().pipe(
      // tap(x => console.log('book started...')),
      // delay(2000)
    );
    const combined$ = combineLatest(location$, sessionId$, book$);
    // const combined$ = of(location$, book$, sessionId$).pipe(combineAll());
    // const combined$ = of(location$, sessionId$, book$).pipe(concatAll());

    combined$.subscribe(
      ([location, session, book]) => {
        console.log('location', location);
        // console.log('session', session);
        // console.log('book', book);
      },
      err => console.log('err: ', err),
      () => console.log('combined completed!'),
    )
  }
}
