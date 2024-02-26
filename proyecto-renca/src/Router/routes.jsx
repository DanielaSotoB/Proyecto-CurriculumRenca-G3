import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "../utils/ProtectedRoute";

import RutaAprendizaje from "../Views/RutaAprendizaje";
import InformacionCursos from "../Views/InformacionCursos";
import CursosDispo from "../Views/CursosDispo";
import PreguntasFrecuentes from "../Views/PreguntasFrecuentes";
import LoginRegistro from "../Views/LoginRegistro";
import ContactoPag from "../Views/ContactoPag";
import AdmiPanelView from "../Views/AdmiPanelView";
import MiCursito from "../Views/MiCursito";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RutaAprendizaje />} />
        <Route
          path="/CursosDispo"
          element={<ProtectedRoute canActivate={true} />}
        >
          <Route element={<CursosDispo />} />
        </Route>
        <Route path="/InformacionCursos" element={<InformacionCursos />} />
        <Route
          path="/PreguntasFrecuentes"
          element={<PreguntasFrecuentes />}
        />
        <Route path="/LoginRegistro" element={<LoginRegistro />} />
        <Route path="/Contactopag" element={<ContactoPag />} />
        <Route path="/AdmiPanelView" element={<AdmiPanelView />} />
        <Route path="/MiCursito" element={<MiCursito />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
