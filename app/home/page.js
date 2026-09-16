"use client";

import "./home.css";
import { useEffect, useRef, useState } from "react";

/* ---------------- featured reel data (edit freely) ----------------
   `img` points to a file in /public/img — swap these for whichever
   image you want on each film. You have Image-1 … Image-12 available. */
const WORKS = [
  { title: "CRIME NO.45", year: "2026", img: "/img/Image-1.jpg" },
  { title: "CRIME NO.45",year: "2026", img: "/img/Image-2.jpg" },
  { title: "CRIME NO.45",  year: "2026", img: "/img/Image-3.jpg" },
  { title: "CRIME NO.45", year: "2026", img: "/img/Image-4.jpg" },
  { title: "CRIME NO.45",year: "2026", img: "/img/Image-5.jpg" },
  { title: "CRIME NO.45",year: "2026", img: "/img/Image-6.jpg" },
  { title: "CRIME NO.45",year: "2026", img: "/img/Image-7.jpg" },
  { title: "CRIME NO.45",year: "2026", img: "/img/Image-8.jpg" },
  { title: "CRIME NO.45",year: "2026", img: "/img/Image-77.jpg" },
  { title: "CRIME NO.45",year: "2026", img: "/img/Image-9.jpg" },
  { title: "CRIME NO.45",year: "2026", img: "/img/Image-10.jpg" },
  { title: "CRIME NO.45",year: "2026", img: "/img/Image-11.jpg" },
  { title: "CRIME NO.45",year: "2026", img: "/img/Image-12.jpg" },
];

const N = WORKS.length;
const INTERVAL = 2000; // the featured film changes every 2 seconds
const CARDS = [...WORKS, ...WORKS]; // duplicate so the strip wraps seamlessly

export default function HomePage() {
  /* ---- featured reel state / behaviour ---- */
  const [index, setIndex] = useState(0);
  const [anim, setAnim] = useState(true);
  const timer = useRef(null);

  const activeMod = ((index % N) + N) % N;
  const feat = WORKS[activeMod];

  // one card = card width + the gap between cards (see .reel__card in home.css)
  const CARD_STEP = "calc(104px + 0.7rem)";

  // in-page links (#home, #works, …) scroll smoothly WITHOUT putting the
  // hash in the address bar — the URL stays at /home the whole time
  useEffect(() => {
    const onClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute("href").slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // (re)start the 2-second auto-advance
  const startTimer = () => {
    if (timer.current) window.clearInterval(timer.current);
    timer.current = window.setInterval(() => setIndex((i) => i + 1), INTERVAL);
  };
  useEffect(() => {
    startTimer();
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, []);

  // when we slide onto the duplicated first card, snap back to the real one
  useEffect(() => {
    if (index === N) {
      const t = window.setTimeout(() => {
        setAnim(false);
        setIndex(0);
      }, 650);
      return () => window.clearTimeout(t);
    }
    if (!anim) {
      const r = requestAnimationFrame(() => setAnim(true));
      return () => cancelAnimationFrame(r);
    }
  }, [index, anim]);

  return (
    <div className="home">
      {/* ---------------- NAV ---------------- */}
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

      <main>
        {/* ---------------- HERO ---------------- */}
        <section id="home" className="home__hero wrap">
          <span className="home__eyebrow">Independent Film &amp; Production Studio</span>
          <h1 className="home__title">
            Cliché <em>Pictures</em>
          </h1>
          <div className="home__lede">
            <p>
              A production company telling deliberate, human stories — from first
              frame to final cut.
            </p>
            <a className="home__scroll" href="#works">
              View works →
            </a>
          </div>
        </section>

        {/* ---------------- WORKS · FEATURED REEL ---------------- */}
        <section id="works" className="home__section wrap">
          <div className="home__head">
            <h2 className="home__section-title">Selected Works</h2>
            <span className="home__index">[ Featured Reel ]</span>
          </div>

          <div className="reel">
            <div className="reel__stage">
              {WORKS.map((w, i) => (
                <img
                  key={w.img}
                  className={"reel__backdrop" + (i === activeMod ? " is-shown" : "")}
                  src={w.img}
                  alt=""
                />
              ))}
              <div className="reel__scrim" />

              <div className="reel__info">
                <span className="reel__eyebrow">Cliche Pictures</span>
                <h3 className="reel__title">{feat.title}</h3>
              
                <div className="reel__actions">
                  <a className="reel__btn reel__btn--play" href="#contact">▶ Watch Reel</a>
                  <a className="reel__btn reel__btn--ghost" href="#contact">View Info</a>
                </div>
                
                <div className="reel__stars" aria-label="Rated 4 of 5">
               
                </div>
              </div>
            </div>

            <div className="reel__cards">
              <div
                className={"reel__cards-track" + (anim ? "" : " is-instant")}
                style={{ transform: `translateX(calc(${CARD_STEP} * ${index} * -1))` }}
              >
                {CARDS.map((w, k) => (
                  <a
                    key={w.img + "-" + k}
                    className={"reel__card" + (k === index ? " is-active" : "")}
                    href="#contact"
                    aria-hidden={k >= N ? true : undefined}
                    tabIndex={k >= N ? -1 : undefined}
                  >
                    <img src={w.img} alt={w.title} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- ABOUT ---------------- */}
        <section id="about" className="home__section wrap">
          <div className="home__head">
            <h2 className="home__section-title">About Us</h2>
            <span className="home__index">[ 02 — Studio ]</span>
          </div>
          <div className="home__about">
            <div>
              <p className="home__statement">
                We are a small crew of directors, producers and editors who
                believe the <em>best stories are the honest ones</em> — shot with
                patience, cut with restraint.
              </p>
              <p className="home__about-body">
                Founded in 2014, Cliché Pictures produces feature films,
                documentaries and commercial work for clients who want more than a
                moving image. We control every step in-house — from development
                through color and sound — so the finished film keeps the texture
                it started with.
              </p>
            </div>
            <aside className="home__aside">
              <div className="home__stats">
                <div>
                  <div className="home__stat-num">40+</div>
                  <div className="home__stat-label">Films Delivered</div>
                </div>
                <div>
                  <div className="home__stat-num">12</div>
                  <div className="home__stat-label">Festival Awards</div>
                </div>
                <div>
                  <div className="home__stat-num">60+</div>
                  <div className="home__stat-label">Clients</div>
                </div>
                <div>
                  <div className="home__stat-num">11</div>
                  <div className="home__stat-label">Years Running</div>
                </div>
              </div>
              <ul className="home__services">
                <li><span>Direction</span><span>01</span></li>
                <li><span>Production</span><span>02</span></li>
                <li><span>Cinematography</span><span>03</span></li>
                <li><span>Editing &amp; Post</span><span>04</span></li>
                <li><span>Color &amp; Sound</span><span>05</span></li>
              </ul>
            </aside>
          </div>
        </section>

        {/* ---------------- CONTACT ---------------- */}
        <section id="contact" className="home__section wrap">
          <div className="home__head">
            <h2 className="home__section-title">Contact</h2>
            <span className="home__index">[ 03 — Say hello ]</span>
          </div>
          <div className="home__contact">
            <div>
              <p className="home__pitch">
                Let&apos;s make <em>something</em> worth keeping.
              </p>
              <div className="home__contact-links">
                <a href="mailto:hello@clichepictures.com">hello@clichepictures.com</a>
                <a href="tel:+10000000000">+1 (000) 000-0000</a>
                <a href="#works">Instagram ↗</a>
                <a href="#works">Vimeo ↗</a>
              </div>
            </div>

            <form
              className="home__form"
              action="mailto:hello@clichepictures.com"
              method="post"
              encType="text/plain"
            >
              <div className="home__field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Your name" required />
              </div>
              <div className="home__field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="you@studio.com" required />
              </div>
              <div className="home__field">
                <label htmlFor="message">Project</label>
                <textarea id="message" name="message" placeholder="Tell us about it…" required />
              </div>
              <button type="submit" className="home__btn">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="home__footer wrap">
        <span>© 2026 Cliché Pictures — All rights reserved</span>
        <span>Made on paper.</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}
