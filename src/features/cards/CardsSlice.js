//like CardsSlice.js
//use data cards.json


fetch("./data/cards.json")
  .then((res) => res.json())
  .then((data) => {
    cards = [...data, ...data]
    shuffleCards();
    generateCards();
  });
