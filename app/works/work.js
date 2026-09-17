"use client";

import "./work.css";
import { useEffect, useRef, useState } from "react";

/* ---------------- featured reel data (edit freely) ----------------
   `img` points to a file in /public/img. */
const WORKS = [
  { title: "CRIME NO.45", year: "2026", img: "/img/Image-1.jpg" },
  { title: "CRIME NO.45", year: "2026", img: "/img/Image-2.jpg" },
  { title: "CRIME NO.45", year: "2026", img: "/img/Image-3.jpg" },
  { title: "CRIME NO.45", year: "2026", img: "/img/Image-4.jpg" },
  { title: "CRIME NO.45", year: "2026", img: "/img/Image-5.jpg" },
  { title: "CRIME NO.45", year: "2026", img: "/img/Image-6.jpg" },
  { title: "CRIME NO.45", year: "2026", img: "/img/Image-7.jpg" },
  { title: "CRIME NO.45", year: "2026", img: "/img/Image-8.jpg" },
  { title: "CRIME NO.45", year: "2026", img: "/img/Image-9.jpg" },
  { title: "CRIME NO.45", year: "2026", img: "/img/Image-10.jpg" },
  { title: "CRIME NO.45", year: "2026", img: "/img/Image-11.jpg" },
  { title: "CRIME NO.45", year: "2026", img: "/img/Image-12.jpg" },
];

const N = WORKS.length;
const INTERVAL = 2000; // the featured film changes every 2 seconds
const CARDS = [...WORKS, ...WORKS]; // duplicate so the strip wraps seamlessly
// one card = card width + the gap between cards (see .reel__card in work.css)
const CARD_STEP = "calc(104px + 0.7rem)";

export default function Work() {
  const [index, setIndex] = useState(0);
  const [anim, setAnim] = useState(true);
  const timer = useRef(null);

  const activeMod = ((index % N) + N) % N;
  const feat = WORKS[activeMod];

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
    <section id="works" className="home__section wrap">
      <div className="home__head">
        <p className="home__kicker">Portfolio</p>
        <h2 className="home__section-title">Microdrama Series</h2>
        
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
            <span className="reel__eyebrow">Cliché Pictures</span>
            <h3 className="reel__title">
              <span>{feat.title.split(" ")[0]}</span>
              <span>{feat.title.split(" ").slice(1).join(" ")}</span>
            </h3>
            <div className="reel__actions">
              <a className="reel__btn reel__btn--play" href="#contact">▶ Watch Reel</a>
              <a className="reel__btn reel__btn--ghost" href="#contact">View Info</a>
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
  );
}
