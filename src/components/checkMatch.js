import GameCard from "./CharitysCard";

const checkForMatch = (card) => {
  let isMatch = firstCard.dataset.name === secondCard.dataset.name;
  isMatch ? disableCards() : setFlipped();
};

export default checkForMatch;
