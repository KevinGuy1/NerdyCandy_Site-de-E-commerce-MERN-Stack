import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar";
import Home from "../../pages/Home";
import Boutique from "../../pages/Boutique";
import Contact from "../../pages/Contact";
import FAQ from "../../pages/FAQ";
import Profil from "../../pages/Profil";
import Panier from "../../pages/Panier";
import Error404 from "../../pages/Error404";
import Footer from "../Footer";

const index = () => {
  return (
    <div className="">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/Boutique" element={<Boutique />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/FAQ" element={<FAQ />} />
          <Route exact path="/Profil" element={<Profil />} />
          <Route exact path="/Panier" element={<Panier />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default index;
