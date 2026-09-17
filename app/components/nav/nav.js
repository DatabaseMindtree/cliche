"use client";

import "./nav.css";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  // transparent at the top, gains its background once you scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // in-page links (#home, #works, …) scroll smoothly WITHOUT putting the
  // hash in the address bar. Delegated on document, so it covers every
  // anchor on the page (nav, hero, footer, …).
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

  return (
    <header className={"home__nav" + (scrolled ? " scrolled" : "")}>
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
