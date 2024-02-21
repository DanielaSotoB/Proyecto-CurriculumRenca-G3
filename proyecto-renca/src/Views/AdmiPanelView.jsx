import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/Footer";
import AdmiPanel from "../components/AdmiPanel/AdmiPanel";

const AdmiPanelView = () => {
    return (
    <>
        <Navbar />
        <AdmiPanel/>
        <Footer />
    </>
    );
}

export default AdmiPanelView;