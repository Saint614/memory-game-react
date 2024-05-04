import { IndexedCardDeck } from "./CardDeck";
import GameCard from "./CharitysCard";
import { Row, Col } from "reactstrap";

function NoShuffleCardList() {
    console.log(IndexedCardDeck);
    return (
        <Row className="container">
          {IndexedCardDeck.map((card) => {
            return (
              <Col>
                <GameCard card={card}/>
              </Col>
            );
          })}
        </Row>
    );
};



export default NoShuffleCardList;