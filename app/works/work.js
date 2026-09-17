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

export default function Work() {
  return (
    <section id="works" className="home__section wrap">
      <div className="home__head">
        <p className="home__kicker">Portfolio</p>
        <h2 className="home__section-title">Microdrama Series</h2>
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
    </section>
  );
}
