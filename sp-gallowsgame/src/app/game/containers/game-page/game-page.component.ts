import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromGame from '../../reducers';
import { Observable, fromEvent, of, pipe, combineLatest } from 'rxjs';
import { distinctUntilChanged, filter, map, pluck, startWith, take, share, merge, switchMap, scan } from 'rxjs/operators';
import { tap } from 'rxjs/internal/operators/tap';
import { WordActions } from '../../actions';
import { Letter } from '../../models/game.model';

const PATTERN = /^[A-Za-z]*$/;

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})

export class GamePageComponent implements OnInit {
  @ViewChild('letterInput') inputRef: ElementRef;
  letters$: Observable<Letter[]>;
  inputValue$: Observable<string>;
  selectLetter$: Observable<number>;
  public inputElement: HTMLElement;

  constructor(private store: Store<fromGame.State>) {
  }

  ngOnInit() {
    this.inputValue$ = this.store.pipe(select(fromGame.getSelectInputValue));
    this.selectLetter$ = this.store.pipe(select(fromGame.getSelectLetter));
    this.letters$ = this.store.pipe(select(fromGame.getSelectLetters), take(1));
    this.inputElement = this.inputRef.nativeElement;
    this.addInputEvent();
  }

  addInputEvent() {
    this.inputElement.focus();
    const keysInput$ = fromEvent(this.inputElement, 'keydown').pipe(
      map(event => this.getValidInput(event) ? event : {key: ''}),
      pluck('key'),
      distinctUntilChanged()
    );
    keysInput$.subscribe((res: any) => {
      this.store.dispatch(new WordActions.SetInputValue(res));
    });
  }

  getIsValidValue = (val): boolean => PATTERN.test(val);

  getValidInput(event): boolean {
    const value = event.key;
    const valueNumber = value.trim().length === 1;
    const valueIsValid = !this.getIsValidValue(value) || !valueNumber;
    if (valueIsValid) {
      event.preventDefault();
    }
    return !valueIsValid;
  }
}


/*this.inputValue$.subscribe(
  (value) => {
    // console.log('SUB VALUE', value);
  }
);*/
/*  const inputHandler$ = fromEvent(this.inputElement, 'keydown')
    .pipe(map((e: KeyboardEvent) => e.key),
      map((value) => {
        if (this.getValidInput(value)) {
          return value;
        }
        return '';
      }),
    );*/
// startWith({key: 'D'}),

// const letters$ = of('1');

// console.log('acc', acc, ' - ', 'value: ', value);
/*const stream$ = combineLatest(keys$, letters$).pipe(
  scan((acc, curr) => {
    console.log('acc', acc, ' - ', 'value', curr);
    return [];
  }),
  tap(x => console.log('value', x)),
);*/

/*const keyIsValide$ = keyEven$.pipe(
  filter(e => {
    // console.log('event', e);
    return true;
  })
);*/
// .pipe(pluck('key'));

/*map((e: KeyboardEvent) => {
  console.log(e);
  // if (this.getValidInput(e.key){}
})*/
// this.getValidInput(e.key) ? e.key : e.preventDefault()),
/*    keyIsValide$.subscribe(
      val => {
        console.log('EMIT', val);
        // this.store.dispatch(new WordActions.SetInputValue(val));
      });*/
/*
setTimeout(() => {

}, 2000);

setTimeout(() => {
  // this.store.dispatch(new WordActions.SetInputValue('b'));
}, 4000);

setTimeout(() => {
  // this.store.dispatch(new WordActions.SetInputValue('b'));
}, 6000);*/
/*switchMap((event) => {
 /!* return of(value).pipe(
    map(val => this.getValidInput(val) ? val : ''),
  );*!/
})*/
/*const sub1 = typeInput$.pipe(pluck('element'))
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

/*
inputValue$.subscribe(
  val => {
    // console.log('Emit: ', val);
  },
  err => {
    // console.log('Error: ', err);
  },
  () => {
    // console.log('Completed!');
  });
  */

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

/* const valueStream = inputStream.pipe(pluck('value')) */
