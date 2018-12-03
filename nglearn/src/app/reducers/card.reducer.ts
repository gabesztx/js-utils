import * as CardAction from '../actions/card.action';
import { ICard } from '../models/card.model';

const initial_state: ICard[] = [];

export function reducer(state = initial_state, action: CardAction.Actions) {
  switch (action.type) {
    case CardAction.INIT_CARDS:
      return action.payload;
    case CardAction.ROTATE_CARD:
      const card = action.payload;
      console.log('ROTATE_CARD', card);
      return state;
    default:
      return state;
  }
}

export const getCardState = (state: ICard[]) => state;
