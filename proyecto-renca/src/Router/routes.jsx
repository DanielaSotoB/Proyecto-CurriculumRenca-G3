import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import RutaAprendizaje from '../Views/RutaAprendizaje';
import InformacionCursos from '../Views/InformacionCursos';
import CursosDispo from '../Views/CursosDispo';
import PreguntasFrecuentes from '../Views/PreguntasFrecuentes';
import LoginRegistro from '../Views/LoginRegistro';
import ContactoPag from '../Views/ContactoPag';
import AdmiPanelView from '../Views/AdmiPanelView';
import MiCursito from '../Views/MiCursito';

import ProtectedRoute from '../ProtectedRoute';

<<<<<<< HEAD
import RutaAprendizaje from "../Views/RutaAprendizaje";
import InformacionCursos from "../Views/InformacionCursos";
import CursosDispo from "../Views/CursosDispo";
import PreguntasFrecuentes from "../Views/PreguntasFrecuentes";
import LoginRegistro from "../Views/LoginRegistro";
import ContactoPag from "../Views/ContactoPag";
import AdmiPanelView from "../Views/AdmiPanelView";
import MiCursito from "../Views/MiCursito";
import MiCursito from "../Views/MiCursito";
import AdmiPanelCurso from "../Views/AdmiPanelCurso";










=======
>>>>>>> a490a9788cc1e73a059870ea58d24eec9f8c6e90
const router = createBrowserRouter([
  { path: "/", element: <RutaAprendizaje /> },
  { path: "/CursosDispo", element: <CursosDispo /> },
  { path: "/InformacionCursos", element: <InformacionCursos /> },
  { path: "/PreguntasFrecuentes", element: <PreguntasFrecuentes /> },
  { path: "/LoginRegistro", element: <LoginRegistro /> },
  { path: "/Contactopag", element: <ContactoPag /> },
<<<<<<< HEAD
  { path: "/AdmiPanelView", element: <AdmiPanelView/> },
  { path: "/MiCursito", element: <MiCursito/> },
  { path: "/AdmiPanelCurso", element: <AdmiPanelCurso/> },

=======
  { path: "/AdmiPanelView", element: <AdmiPanelView /> },
  { path: "/MiCursito", element: <MiCursito /> },
>>>>>>> a490a9788cc1e73a059870ea58d24eec9f8c6e90

  // Utiliza ProtectedRoute para la ruta de Contactopag
  { path: "/Contactopag", element: <ProtectedRoute path="/Contactopag" element={<ContactoPag />} /> },
]);

export default router;
