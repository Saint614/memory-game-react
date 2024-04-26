import React from "react";
import classnames from "classnames";
import "../app/assets";

const Card = ({ onClick, card, index, isInactive, isFlipped, isDisabled }) => {
  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(index);
  };
};

export default Card;
