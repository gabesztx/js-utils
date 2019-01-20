import * as OtherAction from '../actions/other.actions';
import { ICard } from '../models/card.model';

export interface IState {
  readonly isLoading: boolean;
  readonly cards: ICard[];
}

export const initialState: IState = {
  isLoading: false,
  cards: []
};

export function reducer(state = initialState, action: OtherAction.Actions): IState {
  switch (action.type) {
    case OtherAction.OtherActionTypes.LoadCards:
      return {
        ...state,
        isLoading: true
      };

    case OtherAction.OtherActionTypes.LoadCardsCompleted:
      return {
        ...state,
        isLoading: false,
        cards: action.payload,
      };

    default:
      return state;
  }
}

export const getCards = (state: IState) => state.cards;
export const getIsLoading = (state: IState) => state.isLoading;
