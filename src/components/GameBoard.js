import { IndexedCardDeck } from "./CardDeck";
import GameCard from "./CharitysCard";
import { useState, useEffect } from "react";

function GameBoard() {
    const [cardsArray, setCardsArray] = useState([]);
    const [firstCard, setFirstCard] = useState(null);
    const [secondCard, setSecondCard] = useState(null);
    const [stopFlip, setStopFlip] = useState(false);
    const [matches, setMatches] = useState(0);

    function NewGame() {
        const gameArray = shuffleArray(IndexedCardDeck)
        setCardsArray(gameArray);
        setFirstCard(null);
        setSecondCard(null);
        setMatches(0);
    }

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

    function handleFlippedCards(item) {
        console.log(typeof item);
        if (firstCard !== null && firstCard.id !== item.id) {
            setSecondCard(item);
        } else {
            setFirstCard(item);
        }
    }

    useEffect(() => {
        if (firstCard && secondCard) {
            setStopFlip(true);
            if (firstCard.name === secondCard.name) {
                setCardsArray((prevArray) => {
                    return prevArray.map((unit) => {
                        if (unit.id === firstCard.id) {
                            return { ...unit, matched: true };
                        } else if (unit.id === secondCard.id) {
                            return { ...unit, matched: true};
                        } else {
                            return unit;
                        }
                    });
                });
                setMatches((preVal) => preVal + 1);
                removeSelection();
            } else {
                setTimeout(() => {
                    removeSelection();
                }, 1000);
            }
        }
    }, [firstCard, secondCard])

    function removeSelection() {
        setFirstCard(null);
        setSecondCard(null);
        setStopFlip(false);
    }



    return (
        <div className="container">
            <div className="header">
                <h1>Memory Game</h1>
            </div>
            <div className="board">
                {
                    cardsArray.map((item) => (
                        <GameCard
                        item={item} key={item.id}
                        handleFlippedCard={handleFlippedCards}
                        flipped={
                            item === firstCard ||
                            item === secondCard ||
                            item.matched === true
                        }
                        stopflip={stopFlip}
                        />

                    ))
                }
            </div>
            {matches !== 8 ? (
                <div className="Comments">Thanks for playing!</div>
            ) : (
                <div className="Comments">You won!</div>
            )}
            <button className="button" onClick={NewGame}>New Game</button>
        </div>
    )

}

export default GameBoard;