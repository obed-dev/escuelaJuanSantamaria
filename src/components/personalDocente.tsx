import { useState } from "react";
import "../App.css";

type Categoria = {
  titulo: string;
  icono: string;
  personas: string[];
};

const administrativo: Categoria[] = [
  {
    titulo: "Dirección",
    icono: "🏫",
    personas: ["MAEd. Martín Mora Jiménez — Director"],
  },
  {
    titulo: "Administrativo",
    icono: "📋",
    personas: [
      "Grace Flores Jamieson",
      "Heydee Flores Fallas — Oficinista",
      "Kattia Castro Cruz — Oficinista",
      "Alejandra Pitalúa López — Asistente de Dirección",
      "Vannesa Montiel Artavia — Asistente de Dirección",
      "Marcia Burke Scott — Biblioteca",
    ],
  },
];

const docentes: Categoria[] = [
  {
    titulo: "Docentes Generales",
    icono: "👩‍🏫",
    personas: [
      "Olga Sancho Corrales", "María Isabel Cruz Jaen", "Lohanny Madrigal Arroyo",
      "Evelyn Góngora Moranga", "Karla Molina Portuguez", "Karol Parra Gamboa",
      "Carolina Salas Varela", "Cynthia Cordero Cordero", "Vanessa Chinchilla Bermúdez",
      "Alexandra Castro Calvo", "Melania Rodriguez Solano", "Sara Carvajal Fernández",
      "Anahith Cedeño Ramírez", "Julio Cesar López Jirón", "Xenia María Garro Madrigal",
      "Rebeca Gutiérrez Mena", "Alexandra Calderón Morera", "Carmen Mayra Calderón Chacón",
      "Alma Noelia Vargas Pérez", "Rosa Ceballos Cabrera", "Carmen Alicia Fonseca Cascante",
      "Sidey Montanaro Ramírez", "Karla Martínez Delgado", "Katherine Mata López",
      "Norma Arguello Ramírez", "Raquel Miranda Murillo", "Rosa Elena Ramírez Hernández",
      "Laura Garita Matamoros", "Ingrid Ugalde Esquivel", "Grettel Limbrick Cambronero",
    ],
  },
  {
    titulo: "Aulas Especializadas",
    icono: "🧩",
    personas: [
      "Jeimy Sánchez Vega — Aula Integrada",
      "Melly Monge Román — Aula Especial",
    ],
  },
  {
    titulo: "Inglés",
    icono: "🌐",
    personas: [
      "Pilar Castillo Muñoz", "María Elena Carrillo Valverde",
      "Aurora Bermúdez Reyes", "Willy Fonseca Vargas",
    ],
  },
  {
    titulo: "Educación Religiosa",
    icono: "✝️",
    personas: ["Mayra Lorena Calvo Castro", "Juan Carlos Obando Rojas"],
  },
  {
    titulo: "Educación para el Hogar",
    icono: "🏠",
    personas: ["María Cecilia Aguilar Fernández", "Priscila Zuñiga Zúñiga"],
  },
  {
    titulo: "Educación Musical",
    icono: "🎵",
    personas: ["Luis Humberto Gómez Quirós", "José Antonio Zúñiga Ramírez"],
  },
  {
    titulo: "Educación Física",
    icono: "⚽",
    personas: ["Junior Mata González", "Jefferson Solano López"],
  },
  {
    titulo: "Artes Plásticas",
    icono: "🎨",
    personas: ["Arnold Román Montoya", "Estiff Aguilar Vargas"],
  },
  {
    titulo: "Artes Industriales",
    icono: "🔧",
    personas: ["Juan Pablo Chaves Guevara", "Edward Alvarado Solano"],
  },
  {
    titulo: "Informática Educativa",
    icono: "💻",
    personas: ["Paula Tosi Vargas", "Vilma López Salazar"],
  },
  {
    titulo: "Orientación",
    icono: "🤝",
    personas: ["Ana Karina Sánchez Rodríguez"],
  },
  {
    titulo: "S.A.F.P.A.",
    icono: "📚",
    personas: ["Carmen Picado Olivares", "Adriana Montero Madrigal"],
  },
  {
    titulo: "S.A.F.R.M.L.",
    icono: "📖",
    personas: ["Irella Atmella Salazar"],
  },
  {
    titulo: "S.A.F.P.E.C.",
    icono: "📝",
    personas: ["Ileana Sánchez Araya"],
  },
  {
    titulo: "PIAD",
    icono: "🖥️",
    personas: ["Melania Ródriguez Araya", "Nubia Chavarría Vega"],
  },
];

const servicios: Categoria[] = [
  {
    titulo: "Cocina",
    icono: "🍽️",
    personas: [
      "Daisy Gutiérrez Chinchilla", "Eida Mena Chanto",
      "Milagro Zúñiga Calvo", "Lidieth Amador Quesada",
    ],
  },
  {
    titulo: "Conserjes",
    icono: "🧹",
    personas: [
      "Flor Campos Díaz", "María de los Ángeles Sandí Corrales",
      "Ericka Brenes Carvajal", "Roret Jiménez Vindas",
      "Ana Cecila Vega Valerio", "Merary Gómez Umaña",
      "Juan Carlos Garita Gutiérrez",
    ],
  },
  {
    titulo: "Seguridad",
    icono: "🔒",
    personas: [
      "Gérman Portugués Sandoval",
      "Justo Antonio Obregón Ocampo",
      "Gerardo Cordero Castro",
    ],
  },
  {
    titulo: "Planilla Junta de Educación",
    icono: "📑",
    personas: [
      "Alexis Sánchez Peralta — Mantenimiento",
      "Kattia Salazar Garita — Cocinera",
      "Ronald Ramírez Delgado — Mantenimiento",
    ],
  },
];

type Tab = "administrativo" | "docentes" | "servicios";

export default function PersonalDocente() {
  const [tab, setTab] = useState<Tab>("docentes");

  const data: Record<Tab, Categoria[]> = { administrativo, docentes, servicios };
  const labels: Record<Tab, string> = {
    administrativo: "Personal Administrativo",
    docentes: "Personal Docente",
    servicios: "Personal de Servicios",
  };

  return (
    <main className="pd-main">
      {/* Hero */}
      <section className="pd-hero">
        <div className="pd-hero-overlay" />
        <div className="pd-hero-content">
          <span className="pd-badge">Equipo humano</span>
          <h1>Nuestro <em>Personal</em></h1>
          <p>Docentes, administrativos y personal de servicios comprometidos con la excelencia educativa.</p>
        </div>
      </section>

      {/* Tabs */}
      <div className="pd-tabs-bar">
        {(["administrativo", "docentes", "servicios"] as Tab[]).map((t) => (
          <button
            key={t}
            className={`pd-tab ${tab === t ? "pd-tab-active" : ""}`}
            onClick={() => setTab(t)}
          >
            {labels[t]}
          </button>
        ))}
      </div>

      {/* Contenido */}
      <section className="pd-content">
        <div className="pd-container">
          <h2 className="pd-section-title">{labels[tab]}</h2>
          <div className="pd-divider" />
          <div className="pd-grid">
            {data[tab].map((cat, i) => (
              <div className="pd-card" key={i}>
                <div className="pd-card-header">
                  <span className="pd-card-icon">{cat.icono}</span>
                  <h3>{cat.titulo}</h3>
                </div>
                <ul className="pd-lista">
                  {cat.personas.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}