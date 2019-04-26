import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromGame from '../../reducers';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/internal/operators/tap';
import { map, take } from 'rxjs/operators';
import { WordActions } from '../../actions';

const PATTERN = /^[A-Za-z]*$/;

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})

export class GamePageComponent implements OnInit {
  letters$: Observable<any>;
  selectLetter$: Observable<any>;
  constructor(private store: Store<fromGame.State>) {}

  ngOnInit() {
    this.selectLetter$ = this.store.pipe(select(fromGame.getSelectLetter));
    this.letters$ = this.store.pipe(select(fromGame.getSelectLetters), take(1));
  }
  clearInput(inputEl: any) {
    console.log('clearInput');
    inputEl.value = '';
  }
  logInputValue(inputVal: any) {
    console.log('logInputValue', inputVal);
  }
  addInputEvent() {
    /*const typeInput$ = fromEvent(this.inputElement, 'keypress')
      .pipe(
        tap(x => console.log('LOG', x)),
        map((e: KeyboardEvent) => {
          return {
            element: e.target,
            value: e.key,
          };
        }),
        share()
      );

    const sub1 = typeInput$.pipe(pluck('element'))
      .subscribe(this.clearInput);
    const sub2 = typeInput$.pipe(pluck('value'))
      .subscribe(this.logInputValue);*/
    // const sub = typeInput$.pipe(share());

    // const source1 = sub.subscribe(val => console.log('source1', val));
    // const source2 = sub.subscribe(val => console.log('source2', val));


    // inputValue$.subscribe(this.logInputValue);
    // const inputSource$ = of(clearInput$, inputValue$);
    // .subscribe(this.clearInput)

    // .pipe(filter((event: any) => /enter/i.test(event.key)));
    // map((e: any) => e.key),
    // tap(x => console.log('value', x)),
    // filter(e => this.getValidInput(e)),
    // distinctUntilChanged(), // csak akkor megy tovább ha az utolsó érték változik az előzőtől
    // takeWhile(value => value !== 'q'), // when type Q
    // takeUntil(of(0).pipe(delay(4000))), // when obs is emitted
    // finalize(() => console.log('GAME OVER'))

    /*inputValue$.subscribe(
      val => {
        console.log('Emit: ', val);
      },
      err => {
        // console.log('Error: ', err);
      },
      () => {
        // console.log('Completed!');
      });*/
  }

  getIsValidValue = (event): boolean => PATTERN.test(event.key);

  getValidInput(event): boolean {
    if (!this.getIsValidValue(event)) {
      event.preventDefault();
      return false;
    }
    return true;
  }
}

/*
setTimeout(() => {
  // this.store.dispatch(new WordActions.SetActiveItem(0));
}, 2000);
setTimeout(() => {
  // this.store.dispatch(new WordActions.SetActiveItem(1));
  // this.store.dispatch(new WordActions.SetActiveItem(1));
}, 1500);
setTimeout(() => {
  // this.store.dispatch(new WordActions.SetActiveItem(2));
}, 3000);
// setTimeout(() => {}, 400);
const el = document.querySelector('.logo');
el.classList.add('animScale');
el.addEventListener('animationend', () => {
  console.log('Animation ended');
});*/
