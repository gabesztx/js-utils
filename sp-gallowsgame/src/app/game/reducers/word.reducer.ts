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
  selectedId: number;
}

export const initialState: State = {
  letters: WORD,
  selectedId: null,
};

export function reducer(state = initialState, action: WordActions.Actions): State {
  switch (action.type) {
    case WordActions.WordActionsTypes.SetActiveLetter:
      return {
        ...state,
        selectedId: action.payload,
        letters: state.letters.map((item, key) => {
          if (key === action.payload) {
            return {
              ...item,
              active: !item.active
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
export const getLetterSelectId = (state: State) => state.selectedId;
