import React from "react";
import classnames from "classnames";
import cardBack from "../app/assets/cardBack.png";

const Card = ({ onClick, card, index, isInactive, isFlipped, isDisabled }) => {
  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(index);
  };

  return (
    <div
      className={classnames("card", {
        "is-flipped": isFlipped,
        "is-inactive": isInactive,
      })}
      onClick={handleClick}
    >
      <div classname="card-face card-front-face">
        <img src={cardBack} alt="back of card" />
      </div>
      <div classname="card-face card-back-face">
        <img src={card.image} alt="card front" />
      </div>
    </div>
  );
};

export default Card;
