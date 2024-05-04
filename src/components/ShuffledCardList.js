import { useState, useEffect } from "react";
import { IndexedCardDeck } from "./CardDeck";
import GameCard from "./CharitysCard";
import { Row, Col } from "reactstrap";

function ShuffledCardList() {
    const [items, setItems] = useState(() => {
        let initArray = [];
        for (let i = 0; i < IndexedCardDeck.length; i++) {
            initArray.push(IndexedCardDeck[i]);
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
      console.log(array[0]);
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