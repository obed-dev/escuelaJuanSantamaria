import { Route, Routes } from "react-router-dom";
import { Navbar, Footer, Home  } from "../App";
import SobreNosotros from "../components/sobreNosotros";
import PersonalDocente from "../components/personalDocente";
import VidaEstudiantil from "../components/vidaEstudiantil";
import Noticias from "../components/noticias";


export const AppRouter = () => {

  return (
    <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-nosotros" element={<SobreNosotros />} />
            <Route path="/personal-docente" element={<PersonalDocente />} />
            <Route path="/vida-estudiantil" element={<VidaEstudiantil />} />
            <Route path="/noticias" element={<Noticias />} />
          </Routes>
          <Footer />
        </>
  )
}
