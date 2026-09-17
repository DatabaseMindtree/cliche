import "./contact.css";

export default function Contact() {
  return (
    <section id="contact" className="home__section home__contact-section">
      <div className="home__contact-inner wrap">
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
            <a href="+91 9544418140">+91 9544418140</a>
            <a href="tel:+91 9656204531">+91 9656204531</a>
          </div>

          <div className="home__contact-group">
            <span className="home__contact-label">Location</span>
            <a
              href="https://www.google.com/maps/search/Olivet+MC+Road+Panavely+Kottarakkara+Kollam+Kerala/@8.9852771,76.7862125,14.26z"
              target="_blank"
              rel="noopener noreferrer"
            >
              Olivet, MC Road, Panavely ↗
            </a>
            <span className="home__contact-text">Kottarakkara, Kollam — Kerala, India</span>
          </div>

          <div className="home__contact-group">
            <span className="home__contact-label">Social</span>
            <a href="https://www.instagram.com/cliche.pictures?stkn=MTNuZW10MDQ4azM0dQ==">Instagram ↗</a>
            <a href="https://www.youtube.com/@ClichePictures">YouTube ↗</a>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
