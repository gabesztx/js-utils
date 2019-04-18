import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromGame from '../../reducers';
import { WordActions } from '../../actions';
import { fromEvent, Observable, of, timer } from 'rxjs';
import {
  map,
  debounceTime,
  tap,
  take,
  switchMap,
  distinctUntilChanged,
  startWith,
  filter,
  takeUntil,
  takeWhile,
  delay, finalize, pluck, share
} from 'rxjs/operators';

const WORD = 'SUPERCHARGE';
const PATTERN = /^[A-Za-z]*$/;

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})

export class GamePageComponent implements OnInit {
  // public items: Observable<string[]>;
  // public inputVal: string;
  @ViewChild('letterInput') inputRef: ElementRef;
  public textArr: Array<any> = [];
  public wrongTextArr: Array<any> = [];
  public inputElement: any;

  letters$: Observable<any[]>;
  aciteveItem$: Observable<any[]>;

  // letters$: Observable<any[]>;

  constructor(private store: Store<fromGame.State>) {
    // console.log('GamePageComponent');
  }

  ngOnInit() {
    this.letters$ = this.store.pipe(select(fromGame.getSelectedLetters));
    this.aciteveItem$ = this.store.pipe(select(fromGame.getActiveItem));
    this.letters$.subscribe((res) => {
      console.log('Update letters$: ', res);
    });
    this.aciteveItem$.subscribe((res) => {
      console.log('Update aciteveItem$: ', res);
    });
    setTimeout(() => {
      this.store.dispatch(new WordActions.SetActiveItem(5));
    }, 1000);
    // this.store.dispatch(new WordActions.LoadLetters());
    // this.letters$ = this.inputRef.nativeElement;
    // this.inputElement.focus();
    // this.addLetters();
    // this.addInputEvent();
  }

  addLetters() {
    this.textArr = WORD.split('').map(
      (item) => {
        return {
          value: item,
          active: false,
        };
      });
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

