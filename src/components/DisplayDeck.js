import { IndexedCardDeck } from "./CardDeck";
import GameCard from "./CharitysCard";
import { Row, Col } from "reactstrap";

function DisplayDeck() {
    return (
        <Row className="board">
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

export default DisplayDeck;