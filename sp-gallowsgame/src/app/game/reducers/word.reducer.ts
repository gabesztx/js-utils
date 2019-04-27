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
  letters: Letter[];
  letterInput: string;
  selected: number;
}

export const initialState: State = {
  letters: WORD,
  letterInput: '',
  selected: null,
};

export function reducer(state = initialState, action: WordActions.WordActions): State {
  switch (action.type) {
    case WordActions.WordActionsTypes.SetActiveLetter:
      return {
        ...state,
        selected: action.payload,
        letters: state.letters.map((item, key) => {
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
      return {
        ...state,
        letterInput: action.payload
      };
    default:
      return state;
  }
}

export const getLetters = (state: State) => state.letters;
export const getLetterSelect = (state: State) => state.selected;
export const getInputValue = (state: State) => state.letterInput;

// TODO: map állandoan vissza dobja ha nincs változás akkor is
