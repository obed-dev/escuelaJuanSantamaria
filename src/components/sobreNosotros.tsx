import "../App.css";


const hitos = [
  { año: "1860", texto: "Se establece la primera escuela privada de primeras letras dirigida por doña Josefa Sánchez viuda de Carazo." },
  { año: "1887", texto: "Llegan a Costa Rica don Milciades Cifuentes y doña Sara de Cifuentes, maestra normal graduada en Colombia. Doña Sara funda el Liceo de Niñas de Curridabat." },
  { año: "1900", texto: "Inauguración del edificio de la Escuela Juan Santamaría, construido donde antiguamente estaba el Cabildo o Casa Municipal." },
  { año: "1965", texto: "Se inaugura el edificio actual y se le da el nombre oficial de «Escuela Juan Santamaría»." },
  { año: "1999", texto: "Con el proyecto de las Escuelas de Excelencia del MEP, pasa a llamarse «Escuela de Excelencia Juan Santamaría»." },
  { año: "2005", texto: "La Fundación Curridabat, presidida por doña Irma de Terán, mejora parte de la infraestructura escolar." },
  { año: "2007", texto: "Se construye la zona de espera. En 2008 la zona de Evacuación y se remodeló el Laboratorio de Informática Educativa." },
];

export default function SobreNosotros() {
  return (
    <main className="sn-main">
      {/* Hero */}
      <section className="sn-hero">
        <div className="sn-hero-content">
          <span className="sn-badge">Curridabat · San José · Costa Rica</span>
          <h1>Nuestra <em>Historia</em></h1>
          <p>Más de 160 años formando generaciones de curridabateños con excelencia, valores y vocación.</p>
        </div>
        <div className="sn-hero-overlay" />
      </section>

      {/* Intro */}
      <section className="sn-intro">
        <div className="sn-container">
          <span className="sn-tag">Orígenes</span>
          <h2 className="sn-title">Los inicios de la <span>educación</span> en Curridabat</h2>
          <div className="sn-divider" />
          <div className="sn-intro-grid">
            <div className="sn-intro-text">
              <p>
                Según registros de la Biblioteca Municipal de Curridabat, para el año 1860 se estableció una escuela
                privada de primeras letras dirigida por doña Josefa Sánchez viuda de Carazo, quien permaneció algún
                tiempo ofreciendo excelentes condiciones educativas a quienes asistían.
              </p>
              <p>
                Años después, las cartaginesas Antonia y Josefa Gutiérrez crearon otra escuela privada, a la que
                acudían las personas de más posibilidades económicas del pueblo.
              </p>
              <p>
                En 1887-1888 llegaron a Costa Rica don Milciades Cifuentes y doña Sara de Cifuentes, maestra normal
                graduada en Colombia. Con el apoyo del Inspector de Escuelas don Rafael Odio, doña Sara dirigió la
                escuela de niñas y don Anselmo la de los varones.
              </p>
              <p>
                A la escuela de niñas, doña Sara le dio el nombre de <strong>Liceo de Niñas</strong> (o Liceo de
                Curridabat) y abrió un prestigioso internado donde se cultivó el amor por la música, el estudio y
                se formó una gran cosecha de maestros.
              </p>
            </div>
            <div className="sn-intro-card">
              <div className="sn-quote-icon">❝</div>
              <blockquote>
                Fue este liceo un constante centro cultural de la época, donde se cultivó el amor por la música,
                el estudio y dio una gran cosecha de maestros.
              </blockquote>
              <cite>— Registros históricos de Curridabat</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="sn-timeline-section">
        <div className="sn-container">
          <span className="sn-tag sn-tag-light">Línea del tiempo</span>
          <h2 className="sn-title sn-title-light">Hitos <span className="sn-span-light">históricos</span></h2>
          <div className="sn-divider sn-divider-light" />
          <div className="sn-timeline">
            {hitos.map((h, i) => (
              <div className="sn-hito" key={i}>
                <div className="sn-hito-año">{h.año}</div>
                <div className="sn-hito-linea">
                  <div className="sn-hito-dot" />
                  {i < hitos.length - 1 && <div className="sn-hito-bar" />}
                </div>
                <div className="sn-hito-texto">{h.texto}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categorización */}
      <section className="sn-cat">
        <div className="sn-container">
          <span className="sn-tag">Reconocimiento oficial</span>
          <h2 className="sn-title">Escuela de <span>Excelencia</span></h2>
          <div className="sn-divider" />
          <div className="sn-cat-grid">
            <div className="sn-cat-text">
              <p>
                La escuela se ubica en el Distrito 01 del Cantón de Curridabat. Según datos de la municipalidad,
                la institución tiene sus inicios en 1869, ubicada frente al Parque y a un costado de la iglesia
                católica.
              </p>
              <p>
                Las <strong>Escuelas de Excelencia</strong> nacen como un proyecto del Ministerio de Educación
                Pública que busca mejorar la calidad de educación y por ende la calidad de vida de los educandos.
                Para ello se promueve la participación del Estado, la empresa privada, los gobiernos locales y la
                sociedad civil bajo el lema <em>"Adopto una Escuela"</em>.
              </p>
              <p>
                La municipalidad brinda material según la necesidad del momento; la empresa privada contribuye con
                material educativo y espacios de recreación. La Fundación Curridabat ha apoyado activamente desde
                el año 2005.
              </p>
            </div>
            <div className="sn-cat-stats">
              {[
                { icon: "🏫", num: "1869", label: "Año de fundación" },
                { icon: "⭐", num: "1999", label: "Escuela de Excelencia" },
                { icon: "👧", num: "500+", label: "Estudiantes activos" },
                { icon: "🎓", num: "160+", label: "Años de historia" },
              ].map((s, i) => (
                <div className="sn-stat-card" key={i}>
                  <span className="sn-stat-icon">{s.icon}</span>
                  <span className="sn-stat-num">{s.num}</span>
                  <span className="sn-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}