import "./contact.css";

export default function Contact() {
  return (
    <section id="contact" className="home__section wrap">
      <div className="home__head">
        <p className="home__kicker">Say Hello</p>
        <h2 className="home__section-title">Contact</h2>
      </div>

      <div className="home__contact">
        <div>
          <p className="home__pitch">
            Let&apos;s make <em>something</em> worth keeping.
          </p>
        </div>

        <div className="home__contact-details">
          <div className="home__contact-group">
            <span className="home__contact-label">Phone</span>
            <a href="tel:+10000000000">+1 (000) 000-0000</a>
            <a href="tel:+910000000000">+91 00000 00000</a>
          </div>

          <div className="home__contact-group">
            <span className="home__contact-label">Location</span>
            <span className="home__contact-text">Kochi, Kerala — India</span>
          </div>

          <div className="home__contact-group">
            <span className="home__contact-label">Social</span>
            <a href="#works">Instagram ↗</a>
            <a href="#works">Vimeo ↗</a>
            <a href="#works">YouTube ↗</a>
          </div>
        </div>
      </div>
    </section>
  );
}
