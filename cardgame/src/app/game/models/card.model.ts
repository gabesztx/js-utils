export interface ICard {
  readonly id: number;
  readonly label: string;
  readonly imgUrl: string;
  readonly rotate: boolean;
  readonly isOpen: boolean;
  readonly inactive: boolean;
}
