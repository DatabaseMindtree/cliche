import "./about.css";

/* Edit names/roles here. Add `img: "/team/xxx.jpg"` to any person to
   fill their card with a photo (files go in /public/team). */
const DIRECTORS = [
  { name: "Full Name", role: "Director" },
  { name: "Full Name", role: "Director" },
  { name: "Full Name", role: "Director" },
  { name: "Full Name", role: "Director" },
];

const TEAM = [
  { name: "Full Name", role: "Producer" },
  { name: "Full Name", role: "Cinematographer" },
  { name: "Full Name", role: "Editor" },
  { name: "Full Name", role: "Colorist" },
  { name: "Full Name", role: "Sound Design" },
  { name: "Full Name", role: "Production" },
];

function PersonIcon() {
  return (
    <svg className="home__member-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-5 0-9 2.7-9 6v2h18v-2c0-3.3-4-6-9-6Z" />
    </svg>
  );
}

function Member({ name, role, img }) {
  return (
    <figure className="home__member">
      <div className="home__member-media">
        {img ? <img src={img} alt={name} /> : <PersonIcon />}
      </div>
      <figcaption className="home__member-cap">
        <span className="home__member-name">{name}</span>
        <span className="home__member-role">{role}</span>
      </figcaption>
    </figure>
  );
}

export default function About() {
  return (
    <section id="about" className="home__section wrap">
      <div className="home__head">
        <p className="home__kicker">The Studio</p>
        <h2 className="home__section-title">About Us</h2>
      </div>

      {/* intro */}
      <div className="home__about">
        <p className="home__lead">
          We are a small crew of directors, producers and editors who believe the{" "}
          <em>best stories are the honest ones</em> — shot with patience, cut with
          restraint.
        </p>
        <p className="home__body">
          Founded in 2014, Cliché Pictures produces feature films, documentaries
          and commercial work for clients who want more than a moving image. We
          control every step in-house — from development through color and sound —
          so the finished film keeps the texture it started with.
        </p>
      </div>

      {/* team */}
      <div className="home__team">
        <div className="home__team-block">
          <div className="home__team-head">
            <h3 className="home__team-title">Directors</h3>
            <span className="home__team-count">04</span>
          </div>
          <div className="home__team-row home__team-row--4">
            {DIRECTORS.map((m, i) => (
              <Member key={i} {...m} />
            ))}
          </div>
        </div>

        <div className="home__team-block">
          <div className="home__team-head">
            <h3 className="home__team-title">The Team</h3>
            <span className="home__team-count">06</span>
          </div>
          <div className="home__team-row home__team-row--6">
            {TEAM.map((m, i) => (
              <Member key={i} {...m} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
