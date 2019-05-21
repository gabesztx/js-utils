import * as WordActions from '../actions/word.actions';
import { LetterItem } from '../models/game.model';
import { SetLetterData } from '../actions/word.actions';

// const WORD = 'SUPERCHARGE'.split('').map(
// const WORD = 'supercharge'.split('').map(
//   (item, key) => {
//     return {
//       id: key,
//       value: item,
//       active: false,
//     };
//   });

export interface State {
  readonly letterItem: LetterItem[];
  readonly letter: any;
  readonly letterItemWrong: any[];
  readonly letterWrong: any;
  readonly inputValue: string;
}

export const initialState: State = {
  letterItem: [],
  letter: null,
  letterItemWrong: [],
  letterWrong: null,
  inputValue: '',
};

export function reducer(state = initialState, action: WordActions.WordActions): State {
  switch (action.type) {
    case WordActions.WordActionsTypes.SetLetterData:
      return {
        ...state,
        letterItem: action.payload
      };

    case WordActions.WordActionsTypes.SetInputValue:
      const letterValue = action.payload;
      // console.log('LetterValue', letterValue);
      /*const letterItemMatches = state.letterItem.filter((value) => {
        return value.value === letterValue;
      });
      if (letterItemMatches.length) {
        return {
          ...state,
          inputValue: letterValue,
          letter: letterItemMatches,
          letterItem: state.letterItem.map(item => {
            if (letterValue === item.value) {
              return {
                ...item,
                active: true
              };
            }
            return item;
          })
        };
      } else if (letterValue.length) {
        const letter = {
          id: state.letterItemWrong.length,
          value: letterValue,
          active: false
        };
        return {
          ...state,
          inputValue: letterValue,
          letterWrong: letter,
          letterItemWrong: [...state.letterItemWrong, {
            ...letter,
            active: true
          }]
        };
      }*/
      return {
        ...state,
        inputValue: letterValue,
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
