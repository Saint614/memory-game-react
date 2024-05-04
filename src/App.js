import React from "react";
import { Container } from "reactstrap";
import "./App.css";
//import GameCard from "./components/CharitysCard";
//import { CARDS } from "./app/data/cards";
//import ShuffledCardList from "./components/ShuffledCardList";
import NoShuffleCardList from "./components/NoShuffleCardList";
import { ShuffleButton } from "./components/ShuffleButton";

function App() {
  return (
    <div className="App">
      <Container>
        <NoShuffleCardList />
        <ShuffleButton />
      </Container>
    </div>
  );
}

export default App;

//<GameCard card={CARDS[0]} /><ShuffledCardList/>