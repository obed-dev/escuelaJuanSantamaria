import { useState } from "react";
import { imagenes } from '../assets/imagenes';
import "../App.css";

type Noticia = {
  id: number;
  titulo: string;
  fecha: string;
  categoria: string;
  resumen: string;
  contenido: string;
  imagenes: string;
  color: string;
};

const noticias: Noticia[] = [
  {
    id: 1,
    titulo: "Rumbo a la Gran Final",
    fecha: "24 de octubre, 2016",
    categoria: "Deportes",
    imagenes: imagenes.noticias.futbol5,
    color: "#e8f4fd",
    resumen: "Minutos antes de abordar el bus, para dirigirse a la gran final de fútbol 7 femenino, a realizarse en Boruca. ¡Muchos éxitos chicas!",
    contenido: "El equipo femenino de fútbol 7 de la Escuela Juan Santamaría se preparó con entusiasmo para la gran final interregional. Con entrenamiento constante y determinación, nuestras estudiantes demostraron que el esfuerzo y la dedicación llevan al éxito. El viaje a Boruca representó un hito importante en la vida deportiva de la institución.",
  },
  {
    id: 2,
    titulo: "Campeonas Interregionales",
    fecha: "14 de octubre, 2016",
    categoria: "Deportes",
    imagenes: imagenes.noticias.campeonas,
    color: "#fdf3e8",
    resumen: "Hoy se realizó la final contra el Colegio Sant Jude, en el Gimnasio de Curridabat. ¡Las chicas de nuestra escuela quedaron campeonas!",
    contenido: "En un emocionante partido final celebrado en el Gimnasio de Curridabat, el equipo femenino de fútbol 7 de la Escuela Juan Santamaría se coronó campeón interregional al enfrentarse y superar al Colegio Sant Jude. La comunidad educativa celebró con orgullo este logro que refleja el trabajo en equipo, la disciplina y el espíritu deportivo que se promueve en nuestra institución.",
  },
  {
    id: 3,
    titulo: "Reinado del Maíz",
    fecha: "12 de octubre, 2016",
    categoria: "Cultura",
    imagenes: imagenes.noticias.reinado,
    color: "#e8fdf0",
    resumen: "El día de hoy se realizó el Reinado del Maíz con los estudiantes de primer ciclo, realizado con el fin de recaudar fondos para la comunidad.",
    contenido: "Una colorida y alegre celebración llenó las instalaciones de la escuela con motivo del Reinado del Maíz, actividad organizada con los estudiantes de primer ciclo. Este evento tradicional, lleno de cultura y tradición costarricense, tuvo como objetivo principal la recaudación de fondos para apoyar distintas necesidades de la comunidad educativa. Los estudiantes participaron con entusiasmo, demostrando el orgullo por las raíces culturales del país.",
  },
];

const categorias = ["Todas", "Deportes", "Cultura", "Académico", "Eventos"];

export default function Noticias() {
  const [seleccionada, setSeleccionada] = useState<Noticia | null>(null);
  const [filtro, setFiltro] = useState("Todas");

  const filtradas = filtro === "Todas"
    ? noticias
    : noticias.filter((n) => n.categoria === filtro);

  if (seleccionada) {
    return (
      <main className="nt-main">
        <section className="nt-hero">
          <div className="nt-hero-overlay" />
          <div className="nt-hero-content">
            <span className="nt-badge">{seleccionada.categoria}</span>
            <h1>{seleccionada.titulo}</h1>
            <p className="nt-hero-fecha">📅 {seleccionada.fecha}</p>
          </div>
        </section>

        <section className="nt-articulo">
          <div className="nt-container">
            <button className="nt-back" onClick={() => setSeleccionada(null)}>
              ← Volver a Noticias
            </button>
           
            <div className="nt-articulo-card">
              <div className="nt-articulo-icon" style={{ background: seleccionada.color }}>
                <img src={seleccionada.imagenes} alt="rumbo a la gran final foto" className="nt-articulo-image" />
              </div>
              <h2>{seleccionada.titulo}</h2>
              
              <div className="nt-meta">
                <span className="nt-cat-tag">{seleccionada.categoria}</span>
                <span className="nt-fecha-small">📅 {seleccionada.fecha}</span>
              </div>
              <div className="nt-divider" />
              <p className="nt-resumen-bold">{seleccionada.resumen}</p>
              <p className="nt-contenido-full">{seleccionada.contenido}</p>
            </div>
          
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="nt-main">
      {/* Hero */}
      <section className="nt-hero">
        <div className="nt-hero-overlay" />
        <div className="nt-hero-content">
          <span className="nt-badge">Actualidad escolar</span>
          <h1>Noticias y <em>Eventos</em></h1>
          <p>Mantente informado sobre todo lo que sucede en nuestra comunidad.</p>
        </div>
      </section>

      {/* Filtros */}
      <div className="nt-filtros">
        {categorias.map((c) => (
          <button
            key={c}
            className={`nt-filtro-btn ${filtro === c ? "nt-filtro-active" : ""}`}
            onClick={() => setFiltro(c)}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Grid de noticias */}
      <section className="nt-grid-section">
        <div className="nt-container">
          <span className="nt-tag">
            {filtradas.length} {filtradas.length === 1 ? "publicación" : "publicaciones"}
            {filtro !== "Todas" ? ` en ${filtro}` : ""}
          </span>
          <div className="nt-grid">
            {filtradas.map((n) => (
              <article
                className="nt-card"
                key={n.id}
                onClick={() => setSeleccionada(n)}
              >
                <div className="nt-card-img" style={{ background: n.color }}>
                <img src={n.imagenes} alt={n.titulo}  />
                </div>
                <div className="nt-card-body">
                  <div className="nt-card-meta">
                    <span className="nt-cat-tag">{n.categoria}</span>
                    <span className="nt-fecha-small">{n.fecha}</span>
                  </div>
                  <h3>{n.titulo}</h3>
                  <p>{n.resumen}</p>
                  <button className="nt-leer-mas">Leer más →</button>
                </div>
              </article>
            ))}
          </div>

          {filtradas.length === 0 && (
            <div className="nt-empty">
              <span>📭</span>
              <p>No hay noticias en esta categoría aún.</p>
            </div>
          )}
        </div>
      </section>

      {/* Síguenos */}
      <section className="nt-social">
        <div className="nt-container">
          <h2>¡Síguenos en redes sociales!</h2>
          <p>Mantente al día con todas las actividades y eventos de la escuela.</p>
          <a
            href="https://www.facebook.com/juan.santamaria.921677"
            target="_blank"
            rel="noreferrer"
            className="nt-fb-btn"
          >
            📘 Visitar página de Facebook
          </a>
        </div>
      </section>
    </main>
  );
}