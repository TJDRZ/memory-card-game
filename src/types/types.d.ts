export type CardType = {
  name: string;
  img: string;
  clicked: boolean;
};

export type CardProps = {
  card: CardType;
  gameCheck: (CardType) => void;
};
