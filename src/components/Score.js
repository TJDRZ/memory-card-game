import "../styles/Score.css";

function Score(props) {
  return (
    <div className="Score">
      <p>Current Score: <span className="score-int">{props.currentScore}</span></p>
      <p>High Score: <span className="score-int">{props.highScore}</span></p>
    </div>
  );
}

export default Score;
