import { CardProps } from "../types/types";
import "../styles/Card.css";

function Card(props: CardProps) {
  const { card, gameCheck } = props;

  return (
    <div className="Card" onClick={() => gameCheck(card)}>
      <h2>{card.name}</h2>
      <img src={card.img} alt="Img Not Found" />
    </div>
  );
}

export default Card;
