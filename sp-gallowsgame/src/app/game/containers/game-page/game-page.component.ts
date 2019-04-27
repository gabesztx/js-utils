import { Component, ElementRef, OnInit, OnDestroy, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromGame from '../../reducers';
import { Observable, fromEvent, of, pipe, combineLatest, Subscription } from 'rxjs';
import {
  distinctUntilChanged,
  map,
  pluck,
  take,
  filter,
  startWith,
  share,
  merge,
  switchMap,
  scan
} from 'rxjs/operators';
import { WordActions } from '../../actions';
import { Letter } from '../../models/game.model';

const PATTERN = /^[A-Za-z]*$/;

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class GamePageComponent implements OnInit, OnDestroy {
  @ViewChild('letterInput') inputRef: ElementRef;

  public inputElement: HTMLElement;
  public wrongTextArr = ['1', '2', '3'];

  letters$: Observable<Letter[]>;
  letterInput$: Observable<string>;
  selected$: Observable<number>;
  keyInputValue$: Subscription;

  constructor(private store: Store<fromGame.State>) {
  }

  ngOnInit() {
    this.selected$ = this.store.pipe(select(fromGame.getSelectLetter));
    this.letters$ = this.store.pipe(select(fromGame.getSelectLetters), take(1));
    this.letterInput$ = this.store.pipe(select(fromGame.getSelectInputValue));

    this.inputElement = this.inputRef.nativeElement;
    this.inputElement.focus();

    this.inputKeyEvent();

  }

  inputKeyEvent() {
    this.keyInputValue$ = fromEvent(this.inputElement, 'keydown').pipe(
      map((e: KeyboardEvent) => {
        e.preventDefault();
        return this.getKeyIsValide(e.key) ? {key: ''} : event;
      }),
      pluck('key'),
      distinctUntilChanged()
    ).subscribe((value: string) =>
      this.store.dispatch(new WordActions.SetInputValue(value)));
  }

  getKeyIsValide(value: string): boolean {
    return !PATTERN.test(value) || !(value.length === 1);
  }

  ngOnDestroy() {
    this.keyInputValue$.unsubscribe();
  }
}

// validPattern = (val): boolean => PATTERN.test(val);
// TODO: wrong letters

/*setTimeout(() => {
  this.store.dispatch(new WordActions.SelectLetter(0));
  setTimeout(() => {
    this.store.dispatch(new WordActions.SelectLetter(1));
    setTimeout(() => {
      this.store.dispatch(new WordActions.SelectLetter(2));
    }, 1000);
  }, 1000);
}, 1000);*/
