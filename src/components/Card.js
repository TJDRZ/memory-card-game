import "../styles/Card.css";

function Card(props) {
  return (
    <div
      className="Card"
      onClick={() => {
        props.setClicked();
      }}
    >
      <h2>{props.name}</h2>
      <img src={props.img} alt="Img Not Found" />
    </div>
  );
}

export default Card;
