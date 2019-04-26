import * as WordActions from '../actions/word.actions';
import { Letter } from '../models/game.model';

// const WORD = 'SUPERCHARGE'.split('').map(
const WORD = 'SUP'.split('').map(
  (item, key) => {
    return {
      id: key,
      value: item,
      active: false,
    };
  });

export interface State {
  letters: Letter[];
  selected: number;
}

export const initialState: State = {
  letters: WORD,
  selected: null,
};

export function reducer(state = initialState, action: WordActions.Actions): State {
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
    default:
      return state;
  }
}

export const getLetters = (state: State) => state.letters;
export const getLetterSelect = (state: State) => state.selected;

// TODO: map állandoan vissza dobja ha nincs változás akkor is
