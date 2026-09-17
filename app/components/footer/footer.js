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
            An independent film &amp; production studio telling deliberate, human
            stories — from first frame to final cut.
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
          <a href="mailto:hello@clichepictures.com">hello@clichepictures.com</a>
          <a href="tel:+10000000000">+1 (000) 000-0000</a>
          <span className="footer__muted">Kochi, India</span>
        </div>

        <div className="footer__col">
          <h4>Follow</h4>
          <a href="#works">Instagram ↗</a>
          <a href="#works">Vimeo ↗</a>
          <a href="#works">YouTube ↗</a>
        </div>
      </div>

      <div className="wrap footer__bottom">
        <span>© 2026 Cliché Pictures — All rights reserved</span>
        <a className="footer__top" href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}
