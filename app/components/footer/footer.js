import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div className="footer__brand">
          <a className="footer__logo" href="#home">
            Cliché <span>Pictures</span>
          </a>
          <p className="footer__tagline">
          No shortcuts. No filler.
              instead of lets make something worth keeping.
          </p>
        </div>

        <nav className="footer__col">
          <h4>Explore</h4>
          <a href="#home">Home</a>
          <a href="#works">Works</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="footer__col">
          <h4>Studio</h4>
          <a href="mailto:hello@clichepictures.com">clichepictures26@gmail.com</a>
          <a href="tel:+91 9544418140">+91 9544418140</a>
          <a
            href="https://www.google.com/maps/search/Olivet+MC+Road+Panavely+Kottarakkara+Kollam+Kerala/@8.9852771,76.7862125,14.26z"
            target="_blank"
            rel="noopener noreferrer"
          >
            Panavely, Kollam ↗
          </a>
        </div>

        <div className="footer__col">
          <h4>Follow</h4>
          <a href="https://www.instagram.com/cliche.pictures?stkn=MTNuZW10MDQ4azM0dQ==">Instagram ↗</a>
          <a href="https://www.youtube.com/@ClichePictures">YouTube ↗</a>
        </div>
      </div>

      <div className="wrap footer__bottom">
        <span>© 2026 Cliché Pictures — All rights reserved</span>
        <a className="footer__top" href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}
