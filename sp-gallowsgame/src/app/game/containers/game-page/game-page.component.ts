import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../reducers';
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
  delay, finalize
} from 'rxjs/operators';

const WORD = 'SUPERCHARGE';
const PATTERN = /^[A-Za-z]*$/;

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})

export class GamePageComponent implements OnInit {
  @ViewChild('textInput') inputRef: ElementRef;
  public textArr: Array<any> = [];
  public wrongTextArr: Array<any> = [];
  public inputElement: any;

  constructor(private store: Store<fromStore.State>) {
  }

  ngOnInit() {
    this.inputElement = this.inputRef.nativeElement;
    this.inputElement.focus();
    this.addLetters();
    this.addInputEvent();
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

  resetInput(event) {
    event.target.value = '';
  }

  addInputEvent() {


    const typeInput$ = fromEvent(this.inputElement, 'keypress')
      .pipe(
        tap(this.resetInput),
        filter(e => this.getValidInput(e)),
        map((e: any) => e.key),
        distinctUntilChanged(),
        tap(x => console.log('LOG', x)),
        // takeWhile(value => value !== 'q'), // when type Q
        // takeUntil(of(0).pipe(delay(4000))), // when obs is emitted
        // finalize(() => console.log('GAME OVER'))
      );
    /*.pipe(
      // debounceTime(200),
      tap(this.resetInput),
      filter(e => this.getValidInput(e)),
      map(e => e.key),
      distinctUntilChanged(),
      // takeWhile(value => value !== 'q'), // when type Q
      // takeUntil(of(0).pipe(delay(4000))), // when obs is emitted
      // finalize(() => console.log('GAME OVER'))
    );*/

    typeInput$.subscribe(
      val => {
        console.log('Value: ', val);
      },
      err => {
        console.log('Error: ', err);
      },
      () => {
        console.log('Completed!');
      });
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
