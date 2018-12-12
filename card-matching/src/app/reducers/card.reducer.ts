import * as CardAction from '../actions/card.action';
import { ICard } from '../view/game/models/card.model';

export interface IState {
  cards: ICard[];
  deckSize: number;
}

const initial_state: IState = {
  cards: [],
  deckSize: 7
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
          if (card.id === action.payload) {
            card.rotate = !card.rotate;
          }
          return card;
        })
      };
    case CardAction.INACTIVE_CARDS:
      return {
        ...state,
        cards: state.cards.map((card) => {
          if (card.id === action.payload) {
            card.inactive = true;
          }
          return card;
        })
      };
    case CardAction.DECK_SIZE:
      return {
        ...state,
        deckSize: action.payload
      };
    case CardAction.RESET_CARDS:
      return {
        ...initial_state,
        deckSize: state.deckSize
      };
    default:
      return state;
  }
}

export const getCards = (state) => state.cards;
export const getDeckSize = (state) => state.deckSize;
