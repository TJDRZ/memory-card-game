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
import "../styles/Container.css";
import { useState, useEffect } from "react";
import uniqid from "uniqid";

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
  const [player, setPlayer] = useState("play");

  const shuffle = () => {
    let arr = [...cards];
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    setCards(arr);
  };

  useEffect(() => {
    let newHigh = 0;
    highScore < currentScore ? (newHigh = currentScore) : (newHigh = highScore);
    setHighScore(newHigh);
    if (currentScore === 16) {
      setPlayer("win");
    }
    shuffle();
  }, [currentScore, highScore]);

  const setClicked = (card) => {
    if (card.clicked === false) {
      card.clicked = true;
      setCurrentScore(currentScore + 1);
    } else {
      cards.forEach((card) => (card.clicked = false));
      setCurrentScore(0);
      setPlayer("lose");
    }
  };

  const reset = () => {
    cards.forEach((card) => (card.clicked = false));
    setPlayer("play");
    setCurrentScore(0);
  };

  const renderSwitch = (player) => {
    switch (player) {
      case "lose":
        return (
          <div className="container">
            <Score currentScore={currentScore} highScore={highScore} />
            <Card
              name={
                "Loser! Lie in the gutter like bum, like a dog, like a mutt, like a mongrel, like an animal! ...click card to continue"
              }
              img={mohel}
              setClicked={() => reset()}
            />
          </div>
        );

      case "win":
        return (
          <div className="container">
            <Score currentScore={currentScore} highScore={highScore} />
            <Card
              name={
                "Winner! I beg your pardon your majesty...click card to continue"
              }
              img={royal}
              setClicked={() => reset()}
            />
          </div>
        );

      default:
        return (
          <div className="container">
            <Score currentScore={currentScore} highScore={highScore} />
            {cards.map((card) => {
              return (
                <Card
                  name={card.name}
                  img={card.img}
                  clicked={card.clicked}
                  key={uniqid()}
                  setClicked={() => setClicked(card)}
                />
              );
            })}
          </div>
        );
    }
  };

  return renderSwitch(player);
}

export default GameController;
