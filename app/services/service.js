import "./service.css";

const SERVICES = [
  {
    no: "01",
    title: "Direction",
    desc: "From treatment to final cut, we shape the story and lead it on set.",
  },
  {
    no: "02",
    title: "Production",
    desc: "Budgets, crew, locations and logistics — handled end to end.",
  },
  {
    no: "03",
    title: "Cinematography",
    desc: "Camera, lighting and lensing that give every frame its intent.",
  },
  {
    no: "04",
    title: "Editing & Post",
    desc: "Assembly, VFX and finishing that keep the story tight.",
  },
  {
    no: "05",
    title: "Color & Sound",
    desc: "Grade and mix that give the film its final texture.",
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
