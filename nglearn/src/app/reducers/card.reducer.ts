/*import * as CardAction from '../actions/card.action';
import { ICard } from '../models/card.model';
const initial_state: ICard[] = [];
export function reducer(state = initial_state, action: CardAction.Actions) {
  switch (action.type) {
    case CardAction.INIT_CARDS:
      return action.payload;
    case CardAction.ROTATE_CARD:
      action.payload.rotate = !action.payload.rotate;
      return state;
    default:
      return state;
  }
}
export const getCardState = (state: ICard[]) => state;*/


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
      console.log('INIT_CARDS');
      return {
        ...state,
        cards: action.payload
      };
    case CardAction.ROTATE_CARD:
      action.payload.rotate = !action.payload.rotate;
      return state;
    default:
      return state;
  }
}

export const getCardState = (state) => state.cards;
