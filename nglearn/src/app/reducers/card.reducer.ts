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
    case CardAction.RESET_CARDS:
      return initial_state;
    default:
      return state;
  }
}

export const getCards = (state) => state.cards;
