
const GameCard = ({ item, handleFlippedCard, flipped, stopflip }) => {
    return (
        <div className="item">
            <div className={flipped ? "flipped" : ""}>
                <img className="face" src={item.image} alt="face" />
                <div className="back" onClick={() => !stopflip && handleFlippedCard(item)}> {" "}</div>
            </div>
        </div>
    );
}

export default GameCard;