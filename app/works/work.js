import "./work.css";

/* Static reel — no JavaScript.
   Backdrops crossfade via CSS; the poster strip auto-scrolls via CSS. */
const POSTERS = [
  "/img/Image-1.jpg",
  "/img/Image-2.jpg",
  "/img/Image-3.jpg",
  "/img/Image-4.jpg",
  "/img/Image-5.jpg",
  "/img/Image-6.jpg",
  "/img/Image-7.jpg",
  "/img/Image-8.jpg",
  "/img/Image-9.jpg",
  "/img/Image-10.jpg",
  "/img/Image-11.jpg",
  "/img/Image-12.jpg",
];

/* Edit titles/images here (files go in /public). */
const OTHERS = [
  { title: "Situationship", img: "/sp/sp-11.jpeg" },
  { title: "Varuthu Pokku", img: "/sp/sp-12.jpeg" },
  { title: "Pearlish", img: "/sp/sp-13.jpg" },
   { title: "Law of Love", img: "/sp/sp-14.jpeg" },
   { title: "Dear Lachu", img: "/others/others-01.jpeg" },
   { title: "Pooja Ki Jawani", img: "/others/others-02.jpeg" },
];

export default function Work() {
  return (
    <section id="works" className="home__section wrap">
      <div className="home__head">
        <p className="home__kicker">Portfolio</p>
        <h2 className="home__section-title">Original Productions</h2>
      </div>

      <div className="reel">
        <div className="reel__stage">
          {POSTERS.map((src, i) => (
            <img key={i} className="reel__backdrop" src={src} alt="" />
          ))}
          <div className="reel__scrim" />

          <div className="reel__info">
            <span className="reel__eyebrow">Cliché Pictures</span>
            <h3 className="reel__title">
              <span>CRIME</span>
              <span>NO.45</span>
            </h3>
            <p className="reel__views">
              <strong>30 Million+</strong> Views
            </p>
            <div className="reel__actions">
              <a
                className="reel__btn reel__btn--play"
                href="https://www.instagram.com/cliche.pictures?stkn=MTNuZW10MDQ4azM0dQ=="
              >
                ▶ Watch Reel
              </a>
              <a className="reel__btn reel__btn--ghost" href="#contact">
                View Info
              </a>
            </div>
          </div>
        </div>

        <div className="reel__cards">
          {/* duplicated once for a seamless CSS marquee */}
          <div className="reel__cards-track">
            {[...POSTERS, ...POSTERS].map((src, i) => (
              <a
                key={i}
                className="reel__card"
                href="#contact"
                aria-hidden={i >= POSTERS.length ? true : undefined}
                tabIndex={i >= POSTERS.length ? -1 : undefined}
              >
                <img src={src} alt="" />
              </a>
            ))}
          </div>
        </div>
      </div>




      <div className="home__head home__head--sub">
        <p className="home__kicker">Portfolio</p>
        <h2 className="home__section-title">Other Works</h2>
      </div>

      <div className="other-works">
        {/* duplicated once for a seamless CSS marquee */}
        <div className="other-works__track">
          {[...OTHERS, ...OTHERS].map((w, i) => (
            <a
              key={i}
              className="other-work"
              href="#contact"
              aria-hidden={i >= OTHERS.length ? true : undefined}
              tabIndex={i >= OTHERS.length ? -1 : undefined}
            >
              <div className="other-work__media">
                <img src={w.img} alt={w.title} />
              </div>
              <div className="other-work__cap">
                <span className="other-work__title">{w.title}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
    
  );
}
