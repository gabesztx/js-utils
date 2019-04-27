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
  readonly letterItems: Letter[];
  readonly wrongItems: Letter[];
  readonly inputValue: string;
  readonly selected: number;
}

export const initialState: State = {
  letterItems: WORD,
  wrongItems: [],
  inputValue: '',
  selected: null,
};

export function reducer(state = initialState, action: WordActions.WordActions): State {
  switch (action.type) {
    case WordActions.WordActionsTypes.SelectLetter:
      // console.log('SelectLetter', action.payload);
      return {
        ...state,
        selected: action.payload,
        letterItems: state.letterItems.map((item, key) => {
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
      // console.log(letterValue);
      return {
        ...state,
        inputValue: letterValue
      };
    default:
      return state;
  }
}

export const getLetters = (state: State) => state.letterItems;
export const getLetterSelect = (state: State) => state.selected;
export const getInputValue = (state: State) => state.inputValue;

// TODO: map állandoan vissza dobja ha nincs változás akkor is
