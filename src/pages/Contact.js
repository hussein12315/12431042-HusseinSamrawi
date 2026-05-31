import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      <section className="section contact-section">
        <h2 className="section-title">Contact Us</h2>

        <div className="contact-grid">
          <div className="contact-card">
            <h3>Get in touch</h3>
            <p>
              Have questions about games or the app? Send us a message and we
              will respond as soon as possible.
            </p>
            <p>Email: husseinsamrawi6@gmail.com</p>
            <p>Phone: +20 123 456 7890</p>
          </div>

          <div className="contact-card contact-form-card">
            <form>
              <label>Name</label>
              <input type="text" placeholder="Your name" />
              <label>Email</label>
              <input type="email" placeholder="Your email" />
              <label>Message</label>
              <textarea placeholder="Your message"></textarea>
              <button type="button">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
