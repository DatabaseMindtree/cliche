import "./home.css";
import Nav from "../components/nav/nav";
import Service from "../services/service";
import Work from "../works/work";
import About from "../about-us/about";
import Contact from "../contact-us/contact";
import Footer from "../components/footer/footer";

export default function HomePage() {
  return (
    <div className="home">
      <Nav />

      <main>
        {/* ---------------- HERO ---------------- */}
        <section id="home" className="home__hero">
          {/* background slideshow (crossfades through the 3 images) */}
          <div className="hero-bg" aria-hidden="true">
            <img src="/top-img/flim-1.jpg" alt="" />
            <img src="/top-img/flim-2.jpg" alt="" />
            <img src="/top-img/flim-3.jpg" alt="" />
          </div>

          <div className="wrap home__hero-inner">
            <span className="home__eyebrow">Independent Film &amp; Production Studio</span>
            <h1 className="home__title">
              Cliché <em>Pictures</em>
            </h1>
            <div className="home__lede">
              <p>
            No shortcuts. No filler. Every frame earns it.
              </p>
              <a className="home__scroll" href="#works">
                View works →
              </a>
            </div>
          </div>
        </section>

        <Service />
        <Work />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
