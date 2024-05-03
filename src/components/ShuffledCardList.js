import { useState, useEffect } from "react";
import { CARDS } from "../app/data/cards"; 
import GameCard from "./CharitysCard";
import { Row, Col } from "reactstrap";


export const CardDeck = [...CARDS, ...CARDS, ...CARDS, ...CARDS];

function ShuffledCardList() {
    const [items, setItems] = useState(() => {
        let initArray = [];
        for (let i = 0; i < CardDeck.length; i++) {
            initArray.push(CardDeck[i]);
          }
        return initArray;
    });
    useEffect(() => {
        const intervalId= setInterval(() => {
            setItems((currItems) => shuffleArray(currItems));
        }, 20000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);
    function shuffleArray (originalArray) {
      let array = [...originalArray];
      var currentIndex = array.length,
        temporaryValue = null,
        randomIndex = null;
      while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
      }
      return array;
    }
    return (
        <Row className="container">
          {items.map((card) => {
            return (
              <Col>
                <GameCard card={card}/>
              </Col>
            );
          })}
        </Row>
    );
};



export default ShuffledCardList;