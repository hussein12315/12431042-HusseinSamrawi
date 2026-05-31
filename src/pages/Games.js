import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import GameCard from "../Components/GameCard";
import games from "../data/games";

function Games() {
  return (
    <>
      <Navbar />

      <section className="section">
        <h2 className="section-title">Popular Games</h2>

        <div className="games-grid">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Games;
