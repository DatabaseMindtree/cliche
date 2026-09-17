import "./sp.css";

/* route: /team/sp  —  Sujith Padmanabhan, director & writer */

/* Demo portrait — replace with the real photo later, e.g. /sp/sp-img.jpeg */
const PHOTO = "/sp/sp-1.jpeg";

const STATS = [
  { num: "60M+", label: "Views · “Situationship”" },
  { num: "35M+", label: "Views · “Varuthu Pokku”" },
  { num: "10+", label: "Years" },
];

const SKILLS = [
  "Direction",
  "Scriptwriting",
  "Editing",
  "Content Strategy",
  "Digital Marketing",
  "Film Promotion",
  "Web Content",
  "Micro-drama",
  "Creative Direction",
];

const WORK = [
  {
    title: "Situationship — S1",
    year: "2024",
    type: "Writer & Director · Micro-drama · 60M+ views",
    img: "https://picsum.photos/seed/situationship/800/500",
  },
  {
    title: "Varuthu Pokku",
    year: "2023",
    type: "Writer & Director · Web Series · 35M+ views",
    img: "https://picsum.photos/seed/varuthupokku/800/500",
  },
  {
    title: "Pearlish",
    year: "2022",
    type: "Director · with Pearle Maaney & Srinish Aravind",
    img: "https://picsum.photos/seed/pearlish/800/500",
  },
  {
    title: "Asiaville Originals",
    year: "2019–24",
    type: "Content Head · Digital Content",
    img: "https://picsum.photos/seed/asiaville-sp/800/500",
  },
];

const EXPERIENCE = [
  { role: "Director, Co-Founder & Writer", org: "Cliché Pictures", period: "2026 — Now" },
  { role: "Content Head", org: "Asiaville Malayalam", period: "2019 — 26" },
  { role: "Director & Writer", org: "Digital Media", period: "2014 — 19" },
];

export default function Page() {
  return (
    <div className="profile">
      {/* top bar */}
      <header className="profile__bar">
        <a className="profile__brand" href="/">
          Cliché <small>Pictures</small>
        </a>
        <a className="profile__back" href="/#about">← Back to team</a>
      </header>

      {/* header: photo + intro */}
      <section className="profile__hero profile__wrap">
        <div className="profile__photo">
          <img src={PHOTO} alt="Sujith Padmanabhan — Director" />
        </div>

        <div className="profile__intro">
          <p className="profile__kicker">Director · Writer · Co-Founder</p>
          <h1 className="profile__name">Sujith Padmanabhan</h1>
          <p className="profile__tagline">
            Relatable, engaging stories that connect with audiences across digital
            and cinematic platforms.
          </p>

          <div className="profile__cta">
            <a className="profile__btn profile__btn--primary" href="#work">
              ▶ View Work
            </a>
            <a
              className="profile__btn profile__btn--ghost"
              href="mailto:hello@clichepictures.com"
            >
              Get in touch
            </a>
          </div>

          <div className="profile__stats">
            {STATS.map((s) => (
              <div className="profile__stat" key={s.label}>
                <span className="profile__stat-num">{s.num}</span>
                <span className="profile__stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="profile__links">
            <a href="mailto:hello@clichepictures.com">Email</a>
            <a href="#">Instagram ↗</a>
            <a href="#">YouTube ↗</a>
            <a href="#">LinkedIn ↗</a>
          </div>
        </div>
      </section>

      {/* biography */}
      <section className="profile__section profile__wrap">
        <h2 className="profile__h">
          <span className="profile__h-no">01</span> Biography
        </h2>
        <div className="profile__bio-grid">
          <div>
            <p className="profile__bio profile__bio--lead">
              I am Sujith Padmanabhan — a director, writer and creative professional
              with over a decade of experience in video production and digital media,
              working across directing, scriptwriting, editing, content strategy,
              digital marketing and film promotions.
            </p>
            <p className="profile__bio">
              As the former Content Head at Asiaville Malayalam, I led creative teams
              across a wide range of digital content projects. As a writer and
              director I have created successful micro-drama and web content —
              including <em>Situationship (Season 1)</em>, which crossed{" "}
              <strong>60 million views</strong>, and <em>Varuthu Pokku</em>, with over{" "}
              <strong>35 million views</strong>. I have also worked on projects such
              as <em>Pearlish</em> with Pearle Maaney and Srinish Aravind.
            </p>
            <p className="profile__bio">
              As a Director, Co-Founder and Writer at Cliché Pictures, my focus is on
              exploring new ideas and creating relatable, engaging content that
              connects with audiences across digital and cinematic platforms.
            </p>
          </div>
          <aside className="profile__expertise">
            <h3 className="profile__sub">Core Skills</h3>
            <ul className="profile__tags">
              {SKILLS.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* selected work */}
      <section id="work" className="profile__section profile__wrap">
        <h2 className="profile__h">
          <span className="profile__h-no">02</span> Selected Work
        </h2>
        <div className="profile__work-grid">
          {WORK.map((f) => (
            <a className="profile__work" href="#" key={f.title}>
              <div className="profile__work-media">
                <img src={f.img} alt={f.title} />
              </div>
              <div className="profile__work-body">
                <span className="profile__work-year">{f.year}</span>
                <h3 className="profile__work-title">{f.title}</h3>
                <span className="profile__work-type">{f.type}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* experience */}
      <section className="profile__section profile__wrap">
        <h2 className="profile__h">
          <span className="profile__h-no">03</span> Experience
        </h2>
        <ul className="profile__exp">
          {EXPERIENCE.map((e) => (
            <li className="profile__exp-item" key={e.role + e.period}>
              <span className="profile__exp-period">{e.period}</span>
              <span className="profile__exp-role">{e.role}</span>
              <span className="profile__exp-org">{e.org}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
