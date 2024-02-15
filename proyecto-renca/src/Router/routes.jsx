import { createBrowserRouter } from "react-router-dom";

import RutaAprendizaje from "../Views/RutaAprendizaje";
import InformacionCursos from "../Views/InformacionCursos";
import CursosDisponibles from "../Views/CursosDisponibles";
import PreguntasFrecuentes from "../Views/PreguntasFrecuentes";


const router = createBrowserRouter([
  { path: "/", element: <RutaAprendizaje/>},
  { path: "/CursosDisponibles", element: <CursosDisponibles /> },
  { path: "/InformacionCursos", element: <InformacionCursos /> },
  { path: "/PreguntasFrecuentes", element: <PreguntasFrecuentes /> },
]);

export default router;