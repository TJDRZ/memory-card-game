import "../styles/Card.css";

function Card(props) {
  return (
    <div
      className="card"
      onClick={() => {
        props.setClicked();
      }}
    >
      <h2>{props.name}</h2>
      {String(props.clicked)}
      <img src={props.img} alt="Img Not Found" />
    </div>
  );
}

export default Card;
