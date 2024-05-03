import React from "react";
import { Container } from "reactstrap";
import "./App.css";
import ShuffledCardList from "./components/ShuffledCardList";

function App() {
  return (
    <div className="App">
      <Container>
        <ShuffledCardList />
      </Container>
    </div>
  );
}

export default App;
