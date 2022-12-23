import { useState, useEffect, useCallback } from "react";
import "../styles/Container.css";
import Card from "./Card";
import Score from "./Score";
import bald from "../imgs/bald.jpeg";
import bigdaddy from "../imgs/bigdaddy.jpeg";
import cow from "../imgs/cow.jpeg";
import dianaross from "../imgs/dianaross.jpeg";
import goretex from "../imgs/goretex.jpeg";
import hampton from "../imgs/hampton.jpeg";
import loverboy from "../imgs/loverboy.jpeg";
import madam from "../imgs/madam.jpeg";
import napkin from "../imgs/napkin.jpeg";
import nothome from "../imgs/nothome.jpeg";
import penske from "../imgs/penske.jpeg";
import portuguese from "../imgs/portuguese.jpeg";
import shrimp from "../imgs/shrimp.jpeg";
import shrinkage from "../imgs/shrinkage.jpeg";
import smoker from "../imgs/smoker.jpeg";
import yankee from "../imgs/yankee.jpeg";
import mohel from "../imgs/mohel.jpeg";
import royal from "../imgs/royal.jpg";
import { CardType } from "../types/types";

function GameController() {
  const [cards, setCards] = useState([
    { name: "Bald George", img: bald, clicked: false },
    { name: "Big Daddy George", img: bigdaddy, clicked: false },
    { name: "Cow George", img: cow, clicked: false },
    { name: "Diana Ross George", img: dianaross, clicked: false },
    { name: "Goretex George", img: goretex, clicked: false },
    { name: "Hampton George", img: hampton, clicked: false },
    { name: "Loverboy George", img: loverboy, clicked: false },
    { name: "Madam George", img: madam, clicked: false },
    { name: "Napkin George", img: napkin, clicked: false },
    { name: "Not Home George", img: nothome, clicked: false },
    { name: "Penske George", img: penske, clicked: false },
    { name: "Portuguese George", img: portuguese, clicked: false },
    { name: "Shrimp George", img: shrimp, clicked: false },
    { name: "Shrinkage George", img: shrinkage, clicked: false },
    { name: "Smoker George", img: smoker, clicked: false },
    { name: "Yankee George", img: yankee, clicked: false },
  ]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameStatus, setGameStatus] = useState("playing");

  const reset = () => {
    cards.forEach((card) => (card.clicked = false));
    setGameStatus("playing");
    setCurrentScore(0);
  };

  const shuffle = () => {
    const arr = [...cards];
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    setCards(arr);
  };

  useEffect(() => {
    if (highScore < currentScore) {
      setHighScore(currentScore);
    }
    if (currentScore === 16) {
      setGameStatus("win");
    }
    shuffle();
  }, [currentScore, highScore]);

  const gameCheck = useCallback(
    (card: CardType) => {
      setCards(
        cards.map((item) =>
          item.name === card.name ? { ...item, clicked: true } : item
        )
      );
      if (card.clicked) {
        setGameStatus("lose");
      } else {
        setCurrentScore(currentScore + 1);
      }
    },
    [currentScore, cards]
  );

  const renderSwitch = (gameStatus: string) => {
    switch (gameStatus) {
      case "lose":
        return (
          <div className="Card" onClick={reset}>
            <p>
              "Loser! Is that what you want? Huh? Do ya?! ...click card to
              continue"
            </p>
            <img src={mohel} alt={"Mohel"} />
            <p>Click to continue...</p>
          </div>
        );
      case "win":
        return (
          <div className="Card" onClick={reset}>
            <p>
              "Winner! I beg your pardon your majesty...click card to continue"
            </p>
            <img src={royal} alt={"King George"} />
            <p>Click to continue...</p>
          </div>
        );
      default:
        return cards.map((card) => {
          return (
            <Card key={crypto.randomUUID()} card={card} gameCheck={gameCheck} />
          );
        });
    }
  };

  return (
    <div className="Container">
      <Score currentScore={currentScore} highScore={highScore} />
      {renderSwitch(gameStatus)}
    </div>
  );
}

export default GameController;
