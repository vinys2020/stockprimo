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
            Bienvenido a <span className="text-primary">StockPrimo</span>
          </h1>
          <p className="text-secondary fs-5">
            Controlá el stock, ventas y facturación de forma simple y eficaz.
          </p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2920/2920083.png"
            alt="Stock Illustration"
            className="img-fluid mt-4"
            style={{ maxWidth: "220px" }}
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
