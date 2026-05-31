import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Login() {
  return (
    <>
      <Navbar />

      <section className="login-container">
        <div className="login-box">
          <h2>Login</h2>
          <p>Enter your username and password to continue.</p>

          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit" className="btn">
              Login
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Login;
