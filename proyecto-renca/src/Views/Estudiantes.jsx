// import React from "react";
import NavbarEstudiantes from "../components/NavbarEstudiante/NavbarEstudiantes";
import Footer from "../components/Footer/Footer";
import EstudiantePortal from "../components/Estudiantes/EstudiantePortal";
import CursosDisponibles from "../components/CursosDisponibles/CursosDisponibles";




const Estudiantes = () => {
    return (
    <>
        <NavbarEstudiantes />
        <EstudiantePortal />
        <CursosDisponibles/>
        <Footer />
    </>
    );
}

export default Estudiantes;