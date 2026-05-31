import { Link } from "react-router-dom";

function GameCard({ game }) {
  return (
    <div className="game-card">
      <img src={game.image} alt={game.title} />

      <div className="card-content">
        <h3>{game.title}</h3>

        <p>{game.description}</p>

        <Link to={`/game/${game.id}`} className="btn">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default GameCard;
