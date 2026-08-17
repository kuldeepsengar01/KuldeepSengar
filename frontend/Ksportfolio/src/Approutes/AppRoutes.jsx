import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../component/Navbar";
import Homepage from "../component/Homepage";
import About from "../component/About";
import Skills from "../component/Skills";
import Projects from "../component/Projects";
import Contact from "../component/Contact";

const AppRoutes = () => {
  return (
    <BrowserRouter>

      {/* Navbar har page par rahega */}
      <Navbar />

      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={<Homepage />}
        />

        {/* About */}
        <Route
          path="/about"
          element={<About />}
        />

        {/* Skills */}
        <Route
          path="/skills"
          element={<Skills />}
        />

        {/* Projects */}
        <Route
          path="/projects"
          element={<Projects />}
        />

        {/* Contact */}
        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>

    </BrowserRouter>
  );
};

export default AppRoutes;