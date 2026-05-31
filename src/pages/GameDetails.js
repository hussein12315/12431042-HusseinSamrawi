import { useParams, Link } from "react-router-dom";
import games from "../data/games";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function GameDetails() {
  const { id } = useParams();

  const game = games.find((g) => g.id === id);

  if (!game) {
    return (
      <>
        <Navbar />

        <div className="section">
          <h1>Game Not Found</h1>
          <Link to="/games" className="btn">
            Back to Games
          </Link>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="details">
        <img src={game.image} alt={game.title} />

        <div className="details-info">
          <h1>{game.title}</h1>

          <p>{game.description}</p>

          <p>
            <strong>Genre:</strong> {game.genre}
          </p>

          <p>
            <strong>Release:</strong> {game.release}
          </p>

          <p>{game.details}</p>

          <Link to="/games" className="btn">
            Back To Games
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default GameDetails;
