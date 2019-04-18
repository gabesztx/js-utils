import * as WordActions from '../actions/word.actions';
import { ILetter } from '../models/game.model';

const WORD = 'SUPERCHARGE'.split('').map(
  (item) => {
    return {
      value: item,
      active: false,
    };
  });

export interface State {
  letters: ILetter[];
  letterId: number;
}

export const initialState: State = {
  letters: WORD,
  letterId: null,
};

export function reducer(state = initialState, action: WordActions.Actions): State {
  switch (action.type) {
    case WordActions.WordActionsTypes.GetLetterItem:
      return {
        ...state,
        letterId: action.payload,
     /*   letters: state.letters.map((item, key) => {
          if (key === action.payload) {
            return {
              ...item,
              active: !item.active
            };
          }
          return item;
        })*/
      };
    /*case WordActions.WordActionsTypes.SetActiveLetter:
      return {
        ...state,
        letters: state.letters.map((item, key) => {
          if (key === action.payload) {
            return {
              ...item,
              active: !item.active
            };
          }
          return item;
        })
      };*/

    default:
      return state;
  }
}

export const getLetters = (state: State) => state.letters;
export const getLetterId = (state: State) => state.letterId;
