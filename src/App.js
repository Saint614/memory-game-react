import React from "react";
import { Container } from "reactstrap";
import "./App.css";
import Card from "./components/Cards";

function App() {
  return (
    <div className="App">
      <Container>Testing</Container>
      <Container>Testing</Container>
      <Container>Testing</Container>
      <Container>Testing</Container>
      <Container>Testing</Container>
      <Container>Testing</Container>
      <Container>Testing</Container>
      <Container>Testing</Container>
      <Container>Testing</Container>
    </div>
  );
}
//added this but don't know if theres a way to just pull from the json, leaving for now
const uniqueCardsArray = [
  {
    image: "assets/javascript-card-game-02.svg",
    name: "02",
  },
  {
    image: "assets/javascript-card-game-03.svg",
    name: "03",
  },
  {
    image: "assets/javascript-card-game-04.svg",
    name: "04",
  },
  {
    image: "assets/javascript-card-game-05.svg",
    name: "05",
  },
  {
    image: "assets/javascript-card-game-06.svg",
    name: "06",
  },
  {
    image: "assets/javascript-card-game-07.svg",
    name: "07",
  },
  {
    image: "assets/javascript-card-game-08.svg",
    name: "08",
  },
  {
    image: "assets/javascript-card-game-10.svg",
    name: "10",
  },
  {
    image: "assets/javascript-card-game-11.svg",
    name: "11",
  },
  {
    image: "assets/javascript-card-game-last-13.svg",
    name: "13",
  },
];

export default App;
