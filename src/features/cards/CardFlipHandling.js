import { useEffect, useState } from 'react';
import GameCard from './Card';
import '../../App.css';

export default function flipCard() {
    //const [cards, setCards] = useState(
    //    () => shuffleCards(uniqueCardsArray.concat(uniqueCardsArray))
    //);
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState({});
    const [moves, setMoves] = useState(0);

    const cards = [GameCard, GameCard, GameCard, GameCard]
    
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