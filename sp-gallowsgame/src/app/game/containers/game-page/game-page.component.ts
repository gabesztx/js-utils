import { Component, ElementRef, OnInit, OnDestroy, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromGame from '../../reducers';
import { Observable, fromEvent, of, pipe, combineLatest, Subscription, merge } from 'rxjs';
import {
  distinctUntilChanged,
  map,
  pluck,
  take,
  filter,
  startWith,
  share,

  switchMap,
  scan, tap
} from 'rxjs/operators';
import { WordActions } from '../../actions';
import { LetterItem } from '../../models/game.model';

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
  public keyInputValue$: Subscription;

  letterItem$: Observable<LetterItem[]>;
  letter$: Observable<any>;

  letterWrongItem$: Observable<string[]>;
  letterWrong$: Observable<any>;

  letterInput$: Observable<string>;

  constructor(private store: Store<fromGame.State>) {
  }

  ngOnInit() {
    this.letterItem$ = this.store.pipe(select(fromGame.getSelectLetterItem), take(1));
    this.letter$ = this.store.pipe(select(fromGame.getSelectLetter));

    this.letterWrongItem$ = this.store.pipe(select(fromGame.getSelectWrongLetterItem), take(1));
    this.letterWrong$ = this.store.pipe(select(fromGame.getSelectWrongLetter));

    this.letterInput$ = this.store.pipe(select(fromGame.getSelectInputValue));

    this.inputElement = this.inputRef.nativeElement;
    this.inputElement.focus();

    this.inputKeyEvent();
  }

  inputKeyEvent() {
    // TODO: input logic in inputTemplate
    this.keyInputValue$ = fromEvent(this.inputElement, 'keydown')
      .pipe(
        map((e: KeyboardEvent) => {
          e.preventDefault(); // TODO: nem biztos hogy a map alatt ez a preventDefault valide :/
          return this.getKeyIsValide(e.key) ? {key: ''} : event;
        }),
        pluck('key'),
        distinctUntilChanged())
      .subscribe((value: string) => {
        this.store.dispatch(new WordActions.SetInputValue(value));
      });
  }

  getKeyIsValide(value: string): boolean {
    return !PATTERN.test(value) || !(value.length === 1);
  }

  ngOnDestroy() {
    this.keyInputValue$.unsubscribe();
  }
}

// validPattern = (val): boolean => PATTERN.test(val);

/*setTimeout(() => {
  this.store.dispatch(new WordActions.SelectLetter(0));
  setTimeout(() => {
    this.store.dispatch(new WordActions.SelectLetter(1));
    setTimeout(() => {
      this.store.dispatch(new WordActions.SelectLetter(2));
    }, 1000);
  }, 1000);
}, 1000);*/
