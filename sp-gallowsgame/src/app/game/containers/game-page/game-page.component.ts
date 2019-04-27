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
