import { useEffect, useState } from 'react';
import Card from '../components/Cards';
import '../../App.css';

export default function flipCard() {
    //const [cards, setCards] = useState(
    //    () => shuffleCards(uniqueCardsArray.concat(uniqueCardsArray))
    //);
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState({});
    const [moves, setMoves] = useState(0);

    const cards = [Card, Card, Card, Card];

    // if the cards match, it gives them a matched property of true and used the setFlippedCards function to set flippedCards to an empty array
    //if not, it turns them back over after the timeout
    const checkForMatch = () => {
        const [first, second] = flippedCards;
        if (cards[first].name === cards[second].name) {
            setMatchedCards((prev) => ({ ...prev, [cards[first].name]: true }));
            setFlippedCards([]);
            return;
        }
        setTimeout.current = setTimeout(() => {
            setFlippedCards([]);
        }, 500);
    };


    //the effect function runs when the value for flippedCards changes, and when 2 cards are flipped, it calls the check for match function
    useEffect(() => {
        if (flippedCards.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }, [flippedCards]);

    const handleCardClick = (index) => {
        if (flippedCards.length === 1) {
            setFlippedCards((prev) => [...prev, index]);
            setMoves((moves) => moves + 1);
        } else {
            clearTimeout(timeout.current);
            setFlippedCards([index]);
        }
    };

    const checkIsFlipped = (index) => {
        return flippedCards.includes(index);
    };

    const checkIsMatched = (card) => {
        return Boolean(matchedCards[card.name]);
    };

    console.log(moves);
}

