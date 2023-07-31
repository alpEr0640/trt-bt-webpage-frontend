import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../CssPages/NavBar.css";
import logo from "../images/trt.png";

function NavBar() {
  return (
    <div>
      <nav
        style={{
          position: "fixed",
          borderRadius: "12px",
          height: "44px",
          backgroundColor: "white",
        }}
        className="navbar navbar-expand-lg fixed-top navbar-light text-dark bg-body-teriarty shadow p-1 m-4"
      >
        <div classNameName="container"></div>
        <a className="navbar-brand mx-4" href="#">
          <img src={logo} alt="Logo" height={"24"} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="container-fluid " id="navbarText">
          <ul className="collapse navbar-collapse navbar-nav me-auto mb-2 mb-lg-0 nav nav-pills nav-justified mx-5 ">
            <li className="nav-item mx-4 ">
              <a
                className="nav-link active font-weight-bold"
                style={{ borderRadius: "12px" }}
                aria-current="page"
                href="#"
              >
                Ana Sayfa
              </a>
            </li>
            <li className="nav-item mx-4  kenan">
              <a
                className="nav-link  kenan "
                style={{ borderRadius: "12px" }}
                href="#"
              >
                Çalışma Arkadaşlarımız
              </a>
            </li>
            <li className="nav-item mx-4 ">
              <a
                className="nav-link kenan"
                style={{ borderRadius: "12px" }}
                href="#"
              >
                Uygulamalar
              </a>
            </li>
            <li className="nav-item mx-4">
              <a
                className="nav-link kenan"
                style={{ borderRadius: "12px" }}
                href="#"
              >
                Mevzuat
              </a>
            </li>
            <li className="nav-item mx-4">
              <a
                className="nav-link kenan"
                style={{ borderRadius: "12px" }}
                href="#"
              >
                Kılavuzlar
              </a>
            </li>
            <li className="nav-item mx-4">
              <a
                className="nav-link kenan"
                style={{ borderRadius: "12px" }}
                href="#"
              >
                Forum
              </a>
            </li>
          </ul>
          <span className="navbar-text"></span>
        </div>
        <div className="login ">
          <button
            style={{ width: "100px", borderRadius: "12px" }}
            className="btn active mx-4 font-weight-bold"
          >
            GİRİŞ
          </button>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
