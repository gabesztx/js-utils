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

  letters$: Observable<Letter[]>;
  inputElementValue$: Observable<string>;
  selected$: Observable<number>;
  keyInputValue$: Subscription;

  constructor(private store: Store<fromGame.State>) {
  }

  ngOnInit() {
    this.inputElementValue$ = this.store.pipe(select(fromGame.getSelectInputValue));
    this.selected$ = this.store.pipe(select(fromGame.getSelectLetter));
    this.letters$ = this.store.pipe(select(fromGame.getSelectLetters), take(1));

    this.inputElement = this.inputRef.nativeElement;
    this.inputElement.focus();

    this.addKeyEvent();
  }

  addKeyEvent() {
    this.keyInputValue$ = fromEvent(this.inputElement, 'keydown').pipe(
      map((e: KeyboardEvent) => {
        e.preventDefault();
        const keyIsValid = this.getKeyIsValide(e);
        return !keyIsValid ? event : {key: ''};
      }),
      pluck('key'),
      distinctUntilChanged()
    ).subscribe((value: string) =>
      this.store.dispatch(new WordActions.SetInputValue(value)));
  }

  getKeyIsValide(e: KeyboardEvent): boolean {
    return !PATTERN.test(e.key) || !(e.key.length === 1);
  }

  ngOnDestroy() {
    this.keyInputValue$.unsubscribe();
  }
}

// validPattern = (val): boolean => PATTERN.test(val);
// TODO: wrong letters
