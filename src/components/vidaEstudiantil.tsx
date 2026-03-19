import "../App.css";

const actividades = [
  {
    icono: "⚽",
    titulo: "Deportes",
    desc: "Fútbol, baloncesto, atletismo y más. Fomentamos el trabajo en equipo, la disciplina y el espíritu deportivo en todos los niveles.",
    color: "#e8f4fd",
  },
  {
    icono: "🎨",
    titulo: "Artes Plásticas",
    desc: "Talleres de pintura, dibujo y manualidades que desarrollan la creatividad y la expresión artística de cada estudiante.",
    color: "#fdf3e8",
  },
  {
    icono: "🎵",
    titulo: "Educación Musical",
    desc: "Clases de música, coro y actividades rítmicas que cultivan el amor por el arte sonoro desde temprana edad.",
    color: "#f0e8fd",
  },
  {
    icono: "🔬",
    titulo: "Ciencias y Tecnología",
    desc: "Laboratorio de Informática Educativa y ferias científicas donde los estudiantes exploran e innovan.",
    color: "#e8fdf0",
  },
  {
    icono: "📚",
    titulo: "Biblioteca Escolar",
    desc: "Un espacio de lectura, investigación y aprendizaje autónomo supervisado por personal especializado.",
    color: "#fde8e8",
  },
  {
    icono: "🤝",
    titulo: "Orientación y Valores",
    desc: "Programa de orientación que acompaña a los estudiantes en su desarrollo personal, emocional y social.",
    color: "#e8f4fd",
  },
  {
    icono: "🏠",
    titulo: "Educación para el Hogar",
    desc: "Aprenden habilidades para la vida cotidiana: cocina, costura, nutrición y organización del hogar.",
    color: "#fdf3e8",
  },
  {
    icono: "🌍",
    titulo: "Idiomas",
    desc: "Clases de inglés impartidas por docentes especializados para abrir puertas al mundo global.",
    color: "#e8fdf0",
  },
];

const logros = [
  {
    icono: "🏆",
    titulo: "Campeonas Interregionales",
    fecha: "Octubre 2016",
    desc: "El equipo femenino de fútbol 7 de la escuela se coronó campeón interregional al derrotar al Colegio Sant Jude en el Gimnasio de Curridabat.",
  },
  {
    icono: "⚽",
    titulo: "Gran Final de Fútbol 7",
    fecha: "Octubre 2016",
    desc: "Nuestras estudiantes representaron a la escuela con orgullo en la gran final de fútbol 7 femenino realizada en Boruca.",
  },
  {
    icono: "🌽",
    titulo: "Reinado del Maíz",
    fecha: "Octubre 2016",
    desc: "Actividad cultural de primer ciclo realizada con el fin de recaudar fondos para la comunidad educativa, celebrando nuestras raíces costarricenses.",
  },
];

export default function VidaEstudiantil() {
  return (
    <main className="ve-main">
      {/* Hero */}
      <section className="ve-hero">
        <div className="ve-hero-overlay" />
        <div className="ve-hero-content">
          <span className="ve-badge">Comunidad escolar</span>
          <h1>Vida <em>Estudiantil</em></h1>
          <p>Un espacio donde el aprendizaje va más allá del aula — deportes, arte, cultura y valores.</p>
        </div>
      </section>

      {/* Actividades */}
      <section className="ve-actividades">
        <div className="ve-container">
          <span className="ve-tag">Enriquecimiento integral</span>
          <h2 className="ve-title">Actividades y <span>Programas</span></h2>
          <div className="ve-divider" />
          <p className="ve-intro-text">
            En la Escuela de Excelencia Juan Santamaría creemos que la educación integral va mucho más allá
            de los libros. Ofrecemos una amplia variedad de actividades extracurriculares y programas
            especializados que enriquecen el desarrollo de cada estudiante.
          </p>
          <div className="ve-act-grid">
            {actividades.map((a, i) => (
              <div className="ve-act-card" key={i} style={{ "--card-bg": a.color } as React.CSSProperties}>
                <span className="ve-act-icon">{a.icono}</span>
                <h3>{a.titulo}</h3>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logros */}
      <section className="ve-logros">
        <div className="ve-container">
          <span className="ve-tag ve-tag-light">Orgullo escolar</span>
          <h2 className="ve-title ve-title-light">Logros y <span className="ve-span-light">Eventos</span></h2>
          <div className="ve-divider ve-divider-light" />
          <div className="ve-logros-grid">
            {logros.map((l, i) => (
              <div className="ve-logro-card" key={i}>
                <div className="ve-logro-icon">{l.icono}</div>
                <div className="ve-logro-body">
                  <span className="ve-logro-fecha">{l.fecha}</span>
                  <h3>{l.titulo}</h3>
                  <p>{l.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner valores */}
      <section className="ve-valores">
        <div className="ve-container">
          <h2 className="ve-valores-title">Nuestros valores en acción</h2>
          <div className="ve-valores-grid">
            {[
              { v: "Respeto", d: "Hacia compañeros, docentes y entorno" },
              { v: "Responsabilidad", d: "En el estudio y la vida escolar" },
              { v: "Solidaridad", d: "Apoyo mutuo en la comunidad" },
              { v: "Excelencia", d: "Siempre dando lo mejor de sí" },
            ].map((item, i) => (
              <div className="ve-valor-item" key={i}>
                <span className="ve-valor-nombre">{item.v}</span>
                <span className="ve-valor-desc">{item.d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}