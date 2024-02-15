import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/Footer";
import CursoInformacion from "../components/CursoInformacion/CursoInformacion";
import Motivacional from "../components/Principal/Motivacional";
import Tarjetas from "../components/Principal/Tarjetas";



const InformacionCursos = () => {
  return (
    <>
    <Navbar />
  <CursoInformacion />
  <Motivacional />
  <Tarjetas />
    <Footer />
    </>
  )
}

export default InformacionCursos