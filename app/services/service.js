import "./service.css";

const SERVICES = [
  {
    no: "01",
    title: "Film Making",
    desc: "End-to-end production — from concept and direction to the final cut.",
  },
  {
    no: "02",
    title: "Screenplay",
    desc: "Original scripts and story development built around character and emotion.",
  },
  {
    no: "03",
    title: "Editing & VFX",
    desc: "Assembly, finishing and visual effects that bring the film together.",
  },
  {
    no: "04",
    title: "Color & Sound",
    desc: "Grading, mixing and score that set the mood and give the picture depth.",
  },
  {
    no: "05",
    title: "Graphic Design",
    desc: "Posters, titles and brand visuals that give each project its identity.",
  },
];

export default function Service() {
  return (
    <section id="services" className="home__section wrap">
      <div className="home__head">
        <p className="home__kicker">Services</p>
        <h2 className="home__section-title">What We Do</h2>
      </div>

      <div className="services">
        {SERVICES.map((s) => (
          <article className="service" key={s.no}>
            <span className="service__no">{s.no}</span>
            <h3 className="service__title">{s.title}</h3>
            <p className="service__desc">{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
