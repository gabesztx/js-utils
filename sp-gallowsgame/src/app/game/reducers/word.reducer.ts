import * as WordActions from '../actions/word.actions';
import { Letter } from '../models/game.model';

const WORD = 'SUPERCHARGE'.split('').map(
  (item, key) => {
    return {
      id: key,
      value: item,
      active: false,
    };
  });

export interface State {
  readonly letterItem: Letter[];
  readonly letter: any;
  readonly letterItemWrong: Letter[];
  readonly letterWrong: any;
  readonly inputValue: string;
}

export const initialState: State = {
  letterItem: WORD,
  letter: null,
  letterItemWrong: [],
  letterWrong: null,
  inputValue: '',
};

export function reducer(state = initialState, action: WordActions.WordActions): State {
  switch (action.type) {
    case WordActions.WordActionsTypes.SelectLetter:
      // console.log('SelectLetter', action.payload);
      return {
        ...state,
        letter: action.payload,
        letterItem: state.letterItem.map((item, key) => {
          if (key === action.payload) {
            return {
              ...item,
              active: true
            };
          }
          return item;
        })
      };
    case WordActions.WordActionsTypes.SetInputValue:
      const letterValue = action.payload;
      return {
        ...state,
        inputValue: letterValue
      };
    default:
      return state;
  }
}

export const getLetterItem = (state: State) => state.letterItem;
export const getLetter = (state: State) => state.letter;

export const getWrongLetterItem = (state: State) => state.letterItemWrong;
export const getWrongLetter = (state: State) => state.letterWrong;

export const getInputValue = (state: State) => state.inputValue;

// TODO: map állandoan vissza dobja ha nincs változás akkor is
