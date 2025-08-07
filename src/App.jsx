import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AdminDashboard from "./pages/AdminDashboard"; // Asegurate de tener este archivo creado
import Propiedades from "./pages/Propiedades";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/propiedades" element={<Propiedades />} />

      </Routes>
    </Router>
  );
}

