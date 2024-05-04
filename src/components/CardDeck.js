import { CARDS } from "../app/data/cards";

const CardDeck = [...CARDS, ...CARDS, ...CARDS, ...CARDS];

const indexArray = (array) => {
    let id = -1;
    return array.map((item) => {
        id++;
        return {
            ...item,
            id: id,
            matched: false
        };

    });
};

export const IndexedCardDeck = indexArray(CardDeck);