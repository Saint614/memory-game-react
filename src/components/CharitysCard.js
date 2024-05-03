import { useState } from "react";
import { useSpring, a } from 'react-spring'

const GameCard = (props) => {
  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
      opacity: flipped ? 1 : 0,
      transform: `perspective(600) rotateY(${flipped ? 180 : 0}deg)`,
      config: { mass: 5, tension: 500, friction: 80 },
  });
  const handleClick = () => {
      setFlipped(state => !state);
      console.log('clicked!');
  }
  return (
      <div className="gamecardDiv" onClick={handleClick} >
          <a.div className="card back" 
                style={{ opacity: opacity.to(o => 1 - o), transform}}/>
          <a.div className="card front"
                  style={{ opacity, transform, rotateX: '180deg',
                   }}>
            <img src={props.card.image} alt={props.card.name}/>
          </a.div>

      </div>
  );
};

export default GameCard;