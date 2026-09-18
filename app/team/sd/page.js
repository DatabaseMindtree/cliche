import "./sd.css";

/* route: /team/sd  —  Sujith Dinesh, filmmaker & content lead */

/* Demo portrait — replace with the real photo later, e.g. /team/sd.jpg */
const PHOTO = "/team/sd-001.jpeg";

const STATS = [
  { num: "30M+", label: "Views · “Vala”" },
  { num: "2019", label: "Working Since" },
  { num: "15", label: "“Vala” Episodes" },
];

const SKILLS = [
  "Writing",
  "Direction",
  "Acting",
  "Video Editing",
  "VFX",
  "Production Coordination",
  "Content Strategy",
  "Creative Direction",
  "Film Promotion",
  "Short Films",
  "Microdrama",
  "Brand Content",
];

const WORK = [
  { title: "Crime No.45", year: "2026", type: "Direction & Acting", img: "/img/Image-2.jpg" },
  { title: "Vala", year: "2024", type: "Writer & Director · 15-ep Microdrama", img: "/sd/sd-01.jpeg" },
  { title: "Asiaville Originals", year: "2022–24", type: "Director · Shorts, Sketches, Brand", img: "" },
  { title: "Rorschach", year: "2023", type: "VFX", img: "/sd/sd-03.jpeg" },
  { title: "Kantara", year: "2022", type: "VFX", img: "/sd/sd-02.jpeg" },
];

const EXPERIENCE = [
  { role: "Director & Actor", org: "Cliché Pictures", period: "2026 — Now" },
  { role: "Content Lead", org: "Asiaville Malayalam", period: "2023 — 26" },
  { role: "Director", org: "Asiaville Malayalam", period: "2022 — 23" },
  { role: "Production Coordinator", org: "Cinema Pranthan", period: "2021 — 22" },
  { role: "VFX Artist", org: "Kantara · Rorschach", period: "2020 — 21" },
  { role: "Assistant Director", org: "Malayalam Cinema", period: "2019" },
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
          <img src={PHOTO} alt="Sujith Dinesh — Filmmaker" />
        </div>

        <div className="profile__intro">
          <p className="profile__kicker">Filmmaker · Content Lead</p>
          <h1 className="profile__name">Sujith Dinesh</h1>
          <p className="profile__tagline">
            Character-driven stories — humour, emotion, and locally rooted
            narratives, from first frame to final cut.
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
              Sujith Dinesh is a filmmaker and content professional working across
              writing, direction, acting, editing, VFX, production coordination and
              creative content leadership.
            </p>
            <p className="profile__bio">
              He began in 2019 as an Assistant Director, then moved into VFX and
              post-production — contributing to films including <em>Kantara</em> and{" "}
              <em>Rorschach</em> — before joining Cinema Pranthan as a Production
              Coordinator on film promotions across Kerala.
            </p>
            <p className="profile__bio">
              At Asiaville Malayalam he directed short films, sketches, brand content
              and microdrama — writing, directing, acting and editing across the full
              process — and was promoted to Content Lead. His 15-episode vertical
              microdrama <em>“Vala,”</em> which he wrote and directed, crossed{" "}
              <strong>30 million views</strong> across social platforms. He continues
              to work at the intersection of cinema, digital storytelling and
              contemporary Malayalam content.
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
