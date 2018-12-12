import * as CardAction from '../actions/card.action';


export interface IState {
  navigation: any;
}

const initial_state: IState = {
  navigation: '',
};

export function reducer(state = initial_state, action: CardAction.Actions) {
  switch (action.type) {
    case CardAction.INIT_CARDS:
      return {
        ...state,
        cards: action.payload
      };
    default:
      return state;
  }
}

// export const getCards = (state) => state.cards;
// export const getDeskSize = (state) => state.deskSize;
