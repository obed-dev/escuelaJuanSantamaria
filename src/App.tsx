import { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "./App.css";
import { imagenes } from "../src/assets/imagenes";
import { AppRouter } from "./Router/AppRouter";
import emailjs from '@emailjs/browser';
import { email_Init_PUBLIC_KEY , recaptcha_SITE_KEY } from "../env";
import ReCAPTCHA from "react-google-recaptcha";



/* ─── NAVBAR (compartido en todas las rutas) ─── */
export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === "/";

  const scrollTo = (id: string) => {
    if (!isHome) {
      navigate("/");
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };




  const links = [
    { label: "Inicio", action: () => scrollTo("inicio") },
    { label: "Sobre Nosotros", to: "/sobre-nosotros" },
    { label: "Personal Docente", to: "/personal-docente" },
    { label: "Vida Estudiantil", to: "/vida-estudiantil" },
    { label: "Noticias", to: "/noticias" },
    { label: "Contacto", action: () => scrollTo("contacto") },
  ];

  return (
    <>
      <nav className="nav">
        <div className="nav-logo" onClick={() => navigate("/")}>
          <div className="nav-escudo">
            <img src={imagenes.sobreNosotros.escudo} alt="escudo de juan santamaria"/>
          </div>
          <div className="nav-title">
            Escuela Juan Santamaría
            <span>Curridabat · Excelencia Educativa</span>
          </div>
        </div>

        <div className="nav-links">
          {links.map((l, i) =>
            l.to ? (
              <NavLink
                key={i}
                to={l.to}
                className={({ isActive }) => isActive ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </NavLink>
            ) : (
              <a key={i} href="#" onClick={(e) => { e.preventDefault(); l.action?.(); }}>
                {l.label}
              </a>
            )
          )}
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menú">
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {links.map((l, i) =>
          l.to ? (
            <NavLink
              key={i}
              to={l.to}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </NavLink>
          ) : (
            <a key={i} href="#" onClick={(e) => { e.preventDefault(); l.action?.(); }}>
              {l.label}
            </a>
          )
        )}
      </div>
    </>
  );
}

/* ─── FOOTER (compartido) ─── */
export function Footer() {
  const navigate = useNavigate();
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <h2>Escuela Juan Santamaría</h2>
            <p>Institución de excelencia educativa comprometida con el desarrollo integral de la niñez costarricense.</p>
            <div className="footer-social">
              <a href="https://www.facebook.com/juan.santamaria.921677" target="_blank" rel="noreferrer" className="social-btn">f</a>
            </div>
          </div>
          <div className="footer-links">
            <h4>Navegación</h4>
            <a href="#" onClick={(e) => { e.preventDefault(); navigate("/"); }}>Inicio</a>
            <a href="#" onClick={(e) => { e.preventDefault(); navigate("/sobre-nosotros"); }}>Sobre Nosotros</a>
            <a href="#" onClick={(e) => { e.preventDefault(); navigate("/personal-docente"); }}>Personal Docente</a>
            <a href="#" onClick={(e) => { e.preventDefault(); navigate("/vida-estudiantil"); }}>Vida Estudiantil</a>
            <a href="#" onClick={(e) => { e.preventDefault(); navigate("/noticias"); }}>Noticias y Eventos</a>
          </div>
          <div className="footer-links">
            <h4>Información</h4>
            <a href="https://www.mep.go.cr/" target="_blank" rel="noreferrer">Ministerio de Educación Pública</a>
            <a href="https://www.mep.go.cr/direccion-regional-san-jose" target="_blank" rel="noreferrer">Dirección Regional San José</a>
            <a href="#" target="_blank" rel="noreferrer">Código: 113-573-01-50-0335</a>
            <a href="tel:22720595">Tel: 2272-0595</a>
            <a href="tel:22711453">Tel: 2271-1453</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 <span>Escuela de Excelencia Juan Santamaría</span>. Todos los derechos reservados.</p>
          <p>Curridabat, San José, Costa Rica 🇨🇷</p>
        </div>
      </div>
    </footer>
  );
}

/* ─── HOME PAGE ─── */
const newsData = [
  { imagenes: imagenes.noticias.campeonas , bg: "linear-gradient(135deg, #e8f4fd 0%, #b5d4f4 100%)", tag: "Deportes", title: "Campeonas Interregionales de Fútbol 7", desc: "Nuestro equipo femenino se coronó campeón en el Gimnasio de Curridabat.", date: "14 de oct, 2016" },
  { imagenes: imagenes.noticias.reinado, bg: "linear-gradient(135deg, #e8fdf0 0%, #c0dd97 100%)", tag: "Cultura", title: "Reinado del Maíz", desc: "Actividad cultural de primer ciclo para recaudar fondos para la comunidad educativa.", date: "12 de oct, 2016" },
  { imagenes: imagenes.noticias.futbol5, bg: "linear-gradient(135deg, #fff8e1 0%, #fac775 100%)", tag: "Deportes", title: "Rumbo a la Gran Final", desc: "El equipo de fútbol 7 femenino viajó a Boruca para representar a la escuela.", date: "24 de oct, 2016" },
];

const sectionsData = [
  { icon: "📖", title: "Sobre Nosotros", desc: "Conoce la historia y trayectoria de más de 160 años de nuestra institución", to: "/sobre-nosotros" },
  { icon: "👩‍🏫", title: "Personal Docente", desc: "Conoce al equipo de profesionales dedicados a la formación de nuestros estudiantes", to: "/personal-docente" },
  { icon: "🎒", title: "Vida Estudiantil", desc: "Actividades, deportes, arte y cultura que enriquecen la experiencia escolar", to: "/vida-estudiantil" },
  { icon: "📰", title: "Noticias y Eventos", desc: "Mantente informado sobre todo lo que sucede en nuestra comunidad escolar", to: "/noticias" },
];

export function Home() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ nombre: "", email: "", mensaje: "" });
  const [sent, setSent] = useState(false);
  const [buttonText, setButtonText] = useState('Enviar Mensaje');
  const observerRef = useRef<IntersectionObserver | null>(null);
  const formRef = useRef<HTMLFormElement>(null);


  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init(email_Init_PUBLIC_KEY); // Replace with your actual public key from EmailJS dashboard

    observerRef.current = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".fade-in").forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!captchaValue) {
    alert("Por favor verifica que no eres un robot");
    return;
  }

  setButtonText('Enviando...');

  try {
    await emailjs.send(
      'service_nujbeyj',
      'template_m9raffd',
      {
        from_name: formData.nombre,
        from_email: formData.email,
        message: formData.mensaje,
        "g-recaptcha-response": captchaValue,
      },
      email_Init_PUBLIC_KEY
    );

    setSent(true);
    setFormData({ nombre: "", email: "", mensaje: "" });
    setButtonText('Enviar Mensaje');

    recaptchaRef.current?.reset();
    setCaptchaValue(null); // 🔥 importante

    setTimeout(() => setSent(false), 2000);

  } catch (error) {
    console.error('Error sending email:', error);
    console.log(error);
    
    alert('Error al enviar el mensaje. Inténtalo de nuevo.');
    setButtonText('Enviar Mensaje');
  }
};

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* HERO */}
      <section className="hero" id="inicio">
        <div className="hero-bg-pattern" />
        <div className="hero-content">
          <span className="hero-badge">Curridabat · San José · Costa Rica</span>
          <h1>
            Escuela de Excelencia
            <em>Juan Santamaría</em>
          </h1>
          <p className="hero-sub">
            "Porque nuestros niños y niñas merecen estudiar en la mejor institución"
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={() => scrollTo("nosotros")}>Conócenos</button>
            <button className="btn btn-outline" onClick={() => scrollTo("contacto")}>Contáctenos</button>
          </div>
        </div>
        <div className="hero-scroll">Explorar</div>
      </section>

      {/* STATS */}
      <div className="stats-bar">
        {[
          { num: "500+", label: "Estudiantes" },
          { num: "30+",  label: "Docentes" },
          { num: "1869", label: "Fundada" },
          { num: "100%", label: "Compromiso" },
        ].map((s) => (
          <div className="stat" key={s.label}>
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* MISION / VISION */}
      <section id="nosotros" style={{ background: "var(--fondo-sec)" }}>
        <div className="container">
          <div className="fade-in">
            <span className="section-tag">Nuestra identidad</span>
            <h2 className="section-title">Quiénes <span>Somos</span></h2>
            <div className="divider" />
            <p style={{ fontSize: "1.08rem", color: "var(--gris-texto)", maxWidth: 620, lineHeight: 1.75, fontWeight: 300 }}>
              Somos una institución pública de excelencia educativa, adscrita al Ministerio de Educación Pública
              de Costa Rica, comprometida con el desarrollo integral de cada estudiante.
            </p>
          </div>
          <div className="mv-grid">
            <div className="mv-card fade-in">
            <img src={imagenes.sobreNosotros.escuela} alt="foto de la escuela juan santamaria" />
             
              <h3>Misión</h3>
              <p>Formar individuos integralmente críticos, creativos y con altos valores, capaces de enfrentar en forma positiva y responsable las diferentes situaciones cotidianas, orientándolos al mejoramiento en su calidad de vida.</p>
            </div>
            <div className="mv-card fade-in">
              <img src={imagenes.sobreNosotros.escudo} alt="escudo de la escuela juan santamaria"  />
              <h3>Visión</h3>
              <p>Orientar racionalmente el uso de los recursos para fortalecer el proceso de enseñanza-aprendizaje, promoviendo la excelencia y los valores éticos, cívicos y culturales que contribuyan al desarrollo formativo de cada individuo y de la comunidad.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIONES */}
      <section id="secciones" className="sections-alt">
        <div className="container">
          <div className="fade-in">
            <span className="section-tag" style={{ color: "rgba(255,255,255,0.55)" }}>Nuestra comunidad</span>
            <h2 className="section-title" style={{ color: "var(--blanco)" }}>
              Explora la <span style={{ color: "var(--acento-claro)" }}>Escuela</span>
            </h2>
            <div className="divider" />
          </div>
          <div className="sections-grid">
            {sectionsData.map((s, i) => (
              <a
                href="#"
                className="sec-card fade-in"
                key={i}
                onClick={(e) => { e.preventDefault(); navigate(s.to); }}
              >
                <span className="sec-card-icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* NOTICIAS */}
      <section id="noticias" style={{ background: "var(--blanco)" }}>
        <div className="container">
          <div className="fade-in">
            <span className="section-tag">Actualidad escolar</span>
            <h2 className="section-title">Noticias y <span>Eventos</span></h2>
            <div className="divider" />
          </div>
          <div className="news-grid">
            {newsData.map((n, i) => (
              <div className="news-card fade-in" key={i} onClick={() => navigate("/noticias")} style={{ cursor: "pointer" }}>
                <div className="news-img" style={{ background: n.bg }}>
                  <img src={n.imagenes} alt={n.title}  className="nt-articulo-image"/>
                </div>
                <div className="news-body">
                  <span className="news-tag">{n.tag}</span>
                  <h4>{n.title}</h4>
                  <p>{n.desc}</p>
                  <p className="news-date">📅 {n.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="contacto-section">
        <div className="container">
          <div className="fade-in">
            <span className="section-tag">Comuníquese con nosotros</span>
            <h2 className="section-title">Contac<span>tenos</span></h2>
            <div className="divider" />
          </div>
          <div className="contacto-grid">
            <div className="contacto-info fade-in">
              {[
                { icon: "📍", title: "Ubicación", text: "Curridabat, San José, Costa Rica\nDirección Regional de Educación de San José Central" },
                { icon: "📞", title: "Teléfonos", text: "2272-0595 / 2271-1453" },
                { icon: "✉️", title: "Correo Electrónico", text: "escuelaexcjuansantamaria@gmail.com", link: "mailto:escuelaexcjuansantamaria@gmail.com" },
                { icon: "🏫", title: "Código Institucional", text: "113-573-01-50-0335" },
              ].map((item, i) => (
                <div className="contacto-item" key={i}>
                  <div className="contacto-icon">{item.icon}</div>
                  <div className="contacto-item-text">
                    <h4>{item.title}</h4>
                    {item.link
                      ? <a href={item.link}>{item.text}</a>
                      : <p style={{ whiteSpace: "pre-line" }}>{item.text}</p>
                    }
                  </div>
                </div>
              ))}
              <div className="contacto-item">
                <div className="contacto-icon">📘</div>
                <div className="contacto-item-text">
                  <h4>Redes Sociales</h4>
                  <a href="https://www.facebook.com/juan.santamaria.921677" target="_blank" rel="noreferrer">
                    Facebook — Escuela Juan Santamaría
                  </a>
                </div>
              </div>
            </div>

            <div className="contacto-form fade-in">
              <h3>Envíenos un mensaje</h3>
              {sent ? (
                <div style={{ textAlign: "center", padding: "2rem 0", color: "var(--acento)" }}>
                  <div style={{ fontSize: "2.5rem", marginBottom: "0.8rem" }}>✅</div>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 700 }}>¡Mensaje enviado!</p>
                  <p style={{ fontSize: "0.95rem", color: "var(--gris-texto)", marginTop: "0.4rem" }}>Nos pondremos en contacto pronto.</p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Nombre completo</label>
                    <input type="text" name="nombre" placeholder="Su nombre" required value={formData.nombre}
                      onChange={(e) => setFormData((p) => ({ ...p, nombre: e.target.value }))} />
                  </div>
                  <div className="form-group">
                    <label>Correo electrónico</label>
                    <input type="email" name="email" placeholder="correo@ejemplo.com" required value={formData.email}
                      onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))} />
                  </div>
                  <div className="form-group">
                    <label >Mensaje</label>
                    <textarea name="mensaje" id="message" rows={4} placeholder="Escriba su consulta aquí..." required value={formData.mensaje}
                      onChange={(e) => setFormData((p) => ({ ...p, mensaje: e.target.value }))} />
                  </div>
                  <ReCAPTCHA
                  sitekey={recaptcha_SITE_KEY}
                 ref={recaptchaRef}
                   onChange={(value) => setCaptchaValue(value)}
                 style={{ display: "inline-block" , padding: "1rem 0" }}   />
                              
                  <button type="submit" className="btn btn-nav">{buttonText}</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ─── LAYOUT WRAPPER ─── */
function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
     <AppRouter />
    </>
  );
}

/* ─── ROOT ─── */
export default function App() {
  return (
   
      <Layout />
   
  );
}