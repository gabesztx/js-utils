import * as CardAction from '../actions/card.actions';
import { ICard } from '../models/card.model';

export interface IState {
  readonly isLoading: boolean;
  readonly cards: ICard[];
  readonly cardsOpen: ICard[];
  readonly deckSize: number;
  // currentCardId: number;
}

const initial_state: IState = {
  isLoading: false,
  cards: [],
  cardsOpen: [],
  deckSize: 2,
  // currentCardId: null,
};

export function reducer(state = initial_state, action: CardAction.Actions) {
  switch (action.type) {
    case CardAction.LOAD_CARDS:
      return {
        ...state,
        isLoading: true
      };
    case CardAction.LOAD_CARDS_COMPLETED:
      return {
        ...state,
        isLoading: false,
        cards: action.payload,
      };
    case CardAction.CURRENT_CARD_ID:
      return {
        ...state,
        currentCardId: action.payload,
      };
    case CardAction.ROTATE_CARD:
      return {
        ...state,
        cards: state.cards.map((card) => {
          if (card.id === action.payload.id) {
            return {
              ...card,
              rotate: !card.rotate
            };
          }
          return card;
        })
      };
    case CardAction.ISOPEN_CARD:
      return {
        ...state,
        cards: state.cards.map((card) => {
          if (card.id === action.payload.card.id) {
            return {...card, isOpen: action.payload.isOpen};
          }
          return card;
        })
      };
    case CardAction.INACTIVE_CARDS:
      return {
        ...state,
        cards: state.cards.map((card) => {
          if (card.id === action.payload.id) {
            return {...card, inactive: true};
          }
          return card;
        })
      };
    case CardAction.OPENED_CARD_ADD:
      return {
        ...state,
        cardsOpen: [...state.cardsOpen, action.payload]
      };
    case CardAction.OPENED_CARD_RESET:
      const cards = action.payload;
      return {
        ...state,
        cardsOpen: [...state.cardsOpen.filter((card, key) => {
          const cardId = state.cardsOpen[key].id;
          return !(cardId === cards[0].id || cardId === cards[1].id);
        })]
      };
    case CardAction.SET_DECK_SIZE:
      return {
        ...state,
        deckSize: action.payload
      };
    /*case CardAction.GET_DECK_SIZE:
      return {
        ...state,
        deckSize: state.deckSize
      };*/
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
export const getCardsOpen = (state) => state.cardsOpen;
export const getIsLoading = (state) => state.isLoading;
export const deckSize = (state) => state.deckSize;
