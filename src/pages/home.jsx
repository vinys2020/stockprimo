import React from "react";
import Login from "../components/Login";
import "./home.css";

export default function Home() {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100">
      <section className="row  align-items-center justify-content-center shadow-lg rounded-4 overflow-hidden bg-white mx-auto">
        {/* Mensaje de bienvenida */}
        <article className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center p-5 text-center home-welcome">
        <h1 className="mb-4 fw-bold">
        <h2>Centro de <span className="text-primary">Control y Administración</span></h2>
</h1>
<p className="text-secondary fs-5">
  Gestioná tu información de forma ágil, segura y centralizada.  
</p>

          <img
            src="https://res.cloudinary.com/dcggcw8df/image/upload/v1754583179/o4fopqihslucbvb3rdfe.png"
            alt="Stock Illustration"
            className="img-fluid mt-4"
            style={{ maxWidth: "620px" , backgroundColor: "red", padding: "15px", borderRadius: "10px"}}
          />
        </article>

        {/* Login */}
        <article className="col-12 col-md-6 d-flex flex-column justify-content-center p-5 home-login">
          <div className="border rounded-3 p-4 shadow-sm bg-light">
            <Login />
          </div>
        </article>
      </section>
    </div>
  );
}
