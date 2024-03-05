// import React from "react";
import NavbarAdministrador from "../components/navbarAdmi/NavbarAdmistrador";
import Footer from "../components/Footer/Footer";
import AdminUsuarios from "../components/AdmiPanel/AdminUsuarios";



const AdmiPanelUsuarios = () => {
    return (
    <>
        <NavbarAdministrador />
        <AdminUsuarios />
        <Footer />
    </>
    );
}

export default AdmiPanelUsuarios;