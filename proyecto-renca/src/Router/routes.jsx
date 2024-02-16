import { createBrowserRouter } from "react-router-dom";

import RutaAprendizaje from "../Views/RutaAprendizaje";
import InformacionCursos from "../Views/InformacionCursos";
import CursosDispo from "../Views/CursosDispo";
import PreguntasFrecuentes from "../Views/PreguntasFrecuentes";
import LoginRegistro from "../Views/LoginRegistro";
import ContactoPag from "../Views/ContactoPag";

const router = createBrowserRouter([
  { path: "/", element: <RutaAprendizaje/>},
  { path: "/CursosDispo", element: <CursosDispo/> },
  { path: "/InformacionCursos", element: <InformacionCursos /> },
  { path: "/PreguntasFrecuentes", element: <PreguntasFrecuentes /> },
  { path: "/LoginRegistro", element: <LoginRegistro/> },
  { path: "/Contactopag", element: <ContactoPag /> },

]);

export default router;