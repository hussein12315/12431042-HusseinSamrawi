import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />

      <section className="home">
        <h1>
          Welcome to <span>GameHub</span>
        </h1>

        <p>Discover popular games and explore their details.</p>

        <Link to="/games" className="btn">
          Browse Games
        </Link>
      </section>

      <Footer />
    </>
  );
}

export default Home;
