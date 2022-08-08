import React from "react";
import "./Card.css";
export default function Card({ card, handleChoice, flipped }) {
  function handleClick() {
    handleChoice(card);
  }
  return (
    <div className="card" key={card.id}>
      <div
        className={
          flipped || card.matched ? "card-content flipped" : "card-content"
        }
      >
        <img
          className="front"
          onClick={handleClick}
          src={card.src}
          alt="animal"
        />
        <div className="cover" onClick={handleClick}>
          <img className="back-image" src="/images/cover.png" alt="card back" />
        </div>
      </div>
    </div>
  );
}
