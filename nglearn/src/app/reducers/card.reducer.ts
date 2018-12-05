import * as CardAction from '../actions/card.action';
import { ICard } from '../models/card.model';

export interface IState {
  cards: ICard[];
}

const initial_state: IState = {
  cards: []
};

export function reducer(state = initial_state, action: CardAction.Actions) {
  switch (action.type) {
    case CardAction.INIT_CARDS:
      // console.log('INIT CARDS');
      return {
        ...state,
        cards: action.payload
      };
    case CardAction.ROTATE_CARD:
      return {
        ...state,
        cards: state.cards.map((card) => {
          if (card.id === action.payload.id) {
            card.rotate = !card.rotate;
          }
          return card;
        })
      };
    case CardAction.RESET_CARD:
      return initial_state;
    default:
      return state;
  }
}

export const getCardState = (state) => state.cards;
