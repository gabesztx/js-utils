import * as CardAction from '../actions/card.action';
import { ICard } from '../models/card.model';

const initial_state: ICard = {
  id: null,
  rotate: false,
};

export function reducer(state = initial_state, action: CardAction.Actions) {
  switch (action.type) {
    case CardAction.ROTATE_CARD:
      return Object.assign({}, state, {
        rotate: action.payload
      });
    default:
      return state;
  }
}

export const getCardState = (state: ICard) => state;
