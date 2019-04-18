import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromGame from '../../reducers';
import { Observable } from 'rxjs';
import { tap } from "rxjs/internal/operators/tap";
import { map } from "rxjs/operators";

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
  // public inputElement: any;
  public textArr: Array<any> = [];
  public wrongTextArr: Array<any> = [];

  letters$: Observable<any>;
  selectLetter$: Observable<any>;

  constructor(private store: Store<fromGame.State>) {
  }

  ngOnInit() {
    this.letters$ = this.store.pipe(
      select(fromGame.getSelectLetters),
      tap(x => console.log('LOG', x)),
      map(value => {
        console.log('value', value);
        return value;
      })
      /*filter((value) => {
        console.log(value);
        return true;
      })*/
    );
    /*this.letters$.subscribe((res) => {
      // console.log('res', res);
      // console.log(res);
      // this.textArr = res;
      // console.log('Letters$: ', res);
    });*/
    /*this.selectLetter$ = this.store.pipe(select(fromGame.getSelectLetterId));
    this.selectLetter$.subscribe((id) => {
      if (id !== null) {
        // console.log('SelectLetter$: ', id);
        this.textArr[id].active = true;
      }
    });*/
    setTimeout(() => {
      // this.store.dispatch(new WordActions.GetLetterItem(0));
    }, 2000);

    setTimeout(() => {
      // this.store.dispatch(new WordActions.GetLetterItem(1));
    }, 4000);
    setTimeout(() => {
      // this.store.dispatch(new WordActions.GetLetterItem(2));
    }, 6000);
    // this.store.dispatch(new WordActions.LoadLetters());
    // this.letters$ = this.inputRef.nativeElement;
    // this.inputElement.focus();
    // this.addLetters();
    // this.addInputEvent();
  }

  addLetters() {
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

