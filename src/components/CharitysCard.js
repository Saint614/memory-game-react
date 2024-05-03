import { Card, CardImg } from "reactstrap";

const GameCard = (props) => {
  return (
    <Card className="gamecard">
      <CardImg width='100%' src={props.card.image}/>
    </Card>
  );
};

export default GameCard;