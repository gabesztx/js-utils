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
      console.log('INIT CARDS');
      return {
        ...state,
        cards: action.payload
      };
    case CardAction.ROTATE_CARD:
      const cardId = action.payload.id;
      // console.log('ROTATE_CARD', cardId);
      /*const cards = state.cards.map((value) => {
        if (value.id === cardId) {
          value.rotate = !value.rotate;
        }
        return value;
      });
      // currentCard.rotate = !currentCard.rotate;
      return {
        ...state,
        cards: cards
      };*/
    case CardAction.RESET_CARD:
      return initial_state;
    default:
      return state;
  }
}

export const getCardState = (state) => state.cards;
