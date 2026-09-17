import "./nav.css";

/* Static nav — no JavaScript. In-page links use CSS smooth-scroll
   (see html { scroll-behavior } and .home section scroll-margin in home.css). */
export default function Nav() {
  return (
    <header className="home__nav">
      <div className="home__nav-inner">
        <a className="home__brand" href="#home">
          Cliché <small>Pictures</small>
        </a>
        <nav>
          <ul className="home__links">
            <li><a href="#home">Home</a></li>
            <li><a href="#works">Works</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
