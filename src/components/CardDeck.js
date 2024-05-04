import { CARDS } from "../app/data/cards";

const CardDeck = [...CARDS, ...CARDS, ...CARDS, ...CARDS];

const indexArray = (array) => {
    let index = -1;
    return array.map((item) => {
        index++;
        return {
            ...item,
            index: index
        };

    });
};

export const IndexedCardDeck = indexArray(CardDeck);