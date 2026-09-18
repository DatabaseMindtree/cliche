import "./about.css";

/* Edit names/roles here. Add `img: "/team/xxx.jpg"` to any person to
   fill their card with a photo (files go in /public/team). */
/* first row — the 4 owners */
const OWNERS = [
  { name: "Joy Mathew", role: "Founder and Managing Director" , img: "/team/Melvin_Mathew.jpeg",},
  { name: "Sujith Padmanabhan", role: "Co-Founder & Writer" ,img: "/team/pappu.jpeg"},
  { name: "Anju Iype", role: "Co-Founder " ,img: "/team/anju-001.jpeg"},
  { name: "Jijo John", role: "Co-Founder", img: "/team/jijo1-001.jpeg"},
];

/* second row — the rest of the crew */
const CREW = [
  { name: "Sujith Dinesh", role: "Creative Head", img: "/team/sd-001.jpeg"},
   { name: "Vipin Nadanchery", role: "DOP" , img: "/team/vipi.jpeg" },
   { name: "Jayakrishnan", role: "DOP" , img:  "/team/jk-01.jpeg" },
     { name: "Manish T K", role: "Editor", img: "/team/ikka-1.jpeg" },
  { name: "Akhil Maloor", role: "Project coordinator"   , img: "/team/maloor-1.jpeg"},
{ name: "Sneha Uthaman", role: "Actress" , img: "/team/sneha-01.jpeg" },
 
];

function PersonIcon() {
  return (
    <svg className="home__member-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-5 0-9 2.7-9 6v2h18v-2c0-3.3-4-6-9-6Z" />
    </svg>
  );
}

function Member({ name, role, img, href }) {
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
          We're a small crew of directors, producers and editors who believe honesty is what makes a story worth watching — shot with patience, cut with restraint.
        </p>
        <p className="home__body">
        Founded in 2026, Cliché Pictures produces feature films, short films and micro dramas alongside branded content for clients who want their story told with intent. We control every step in-house — from development through color and sound — so the finished film keeps the texture it started with.
        </p>
      </div>

      {/* team */}
      <div className="home__team">
        <div className="home__team-block">
          <div className="home__team-head">
            <h3 className="home__team-title">Our Team</h3>
            <span className="home__team-count">
              {String(OWNERS.length + CREW.length).padStart(2, "0")}
            </span>
          </div>

          {/* one uniform 4-per-row grid (owners first, then crew) */}
          <div className="home__team-row home__team-row--4">
            {[...OWNERS, ...CREW].map((m, i) => (
              <Member key={i} {...m} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
