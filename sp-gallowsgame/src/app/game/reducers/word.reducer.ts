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
  letterItems: Letter[];
  wrongItems: Letter[];
  inputEl: string;
  selected: number;
}

export const initialState: State = {
  letterItems: WORD,
  wrongItems: [],
  inputEl: '',
  selected: null,
};

export function reducer(state = initialState, action: WordActions.WordActions): State {
  switch (action.type) {
    case WordActions.WordActionsTypes.SelectLetter:
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
      return {
        ...state,
        inputEl: action.payload
      };
    default:
      return state;
  }
}

export const getLetters = (state: State) => state.letterItems;
export const getLetterSelect = (state: State) => state.selected;
export const getInputValue = (state: State) => state.inputEl;

// TODO: map állandoan vissza dobja ha nincs változás akkor is
