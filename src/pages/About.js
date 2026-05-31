import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <section className="section about-us">
        <h2 className="section-title">About GameHub</h2>

        <p>
          Welcome to GameHub, a platform created for gaming enthusiasts who
          enjoy discovering new games and learning more about their favorite
          titles. Our mission is to provide a simple, modern, and enjoyable
          experience for players of all ages.
        </p>

        <p>
          Whether you enjoy action-packed adventures, competitive multiplayer
          battles, open-world exploration, or creative sandbox experiences,
          GameHub offers a collection of popular games with detailed information
          to help you explore and compare different titles.
        </p>

        <p>
          This project was developed using ReactJS as part of a web development
          course to demonstrate modern frontend development techniques,
          responsive design principles, reusable components, and client-side
          routing. The website is designed to work smoothly across desktops,
          tablets, and mobile devices.
        </p>

        <p>
          GameHub continues to grow as new games and features are added. Our
          goal is to create a gaming portal that is both informative and
          visually appealing while showcasing the power and flexibility of
          ReactJS in building interactive web applications.
        </p>

        <p>
          Thank you for visiting GameHub. We hope you enjoy exploring the world
          of gaming as much as we enjoyed creating this project.
        </p>
      </section>

      <Footer />
    </>
  );
}

export default About;
