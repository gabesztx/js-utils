import * as WordActions from '../actions/word.actions';

const WORD = 'SUPERCHARGE'.split('').map(
  (item) => {
    return {
      value: item,
      active: false,
    };
  });

export interface State {
  letters: any[];
}

export const initialState: State = {
  letters: WORD
};

export function reducer(state = initialState, action: WordActions.Actions): State {
  switch (action.type) {
    case WordActions.WordActionsTypes.LoadLetters:
      console.log('REDUCER: ', 'LoadLetters');
      return {
        ...state,
        letters: state.letters
      };
    case WordActions.WordActionsTypes.SetActiveItem:
      console.log('REDUCER: ', 'SetActiveItem');
      return {
        ...state,
        letters: state.letters.map((item, key) => {
          if (key === action.payload) {
            console.log('KEY: ', key);
            return {
              ...item,
              active: !item.active
            };
          }
          return item;
        })
        // letters:
      };
    default:
      return state;
  }
}

export const gelLetters = (state: State) => state.letters;
