// import React from "react";
import NavbarAdministrador from "../components/navbarAdmi/NavbarAdmistrador";
import Footer from "../components/Footer/Footer";
import AdmiPanel from "../components/AdmiPanel/AdmiPanel";
import UserList from "../components/AdmiPanel/UserList";
// import EditarCursoAdmi from "../components/AdmiPanel/EditarCursoAdmi";


const AdmiPanelView = () => {
    return (
    <>
        <NavbarAdministrador />
        <AdmiPanel/>
        <UserList />
       
        <Footer />
    </>
    );
}

export default AdmiPanelView;