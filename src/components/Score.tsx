import "../styles/Score.css";

type ScoreProps = {
  currentScore: number;
  highScore: number;
};

function Score(props: ScoreProps) {
  const { currentScore, highScore } = props;
  return (
    <div className="Score">
      <p>
        Current Score: <span className="score-int">{currentScore}</span>
      </p>
      <p>
        High Score: <span className="score-int">{highScore}</span>
      </p>
    </div>
  );
}

export default Score;
