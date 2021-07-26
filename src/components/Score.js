import "../styles/Score.css";

function Score(props) {
  return (
    <div className="score">
      <p>Current Score: {props.currentScore}</p>
      <p>High Score: {props.highScore}</p>
    </div>
  );
}

export default Score;
