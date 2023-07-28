import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/trt.png";


export default function NavBar() {
  return (
    <nav
      style={{ position: "fixed", borderRadius: "12px", height: "44px" }}
      className="navbar navbar-expand-lg fixed-top navbar-light bg-white shadow p-1 m-4 "
    >
      <div classNameName="container-fluid" style={{ position: "fixed" }}></div>
      <Link className="navbar-brand mx-4" to="/">
        <img src={logo} alt="Logo" height={"24"} />
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul
          style={{ color: "black" }}
          className="navbar-nav me-auto mb-2 mb-lg-0 nav-justified mx-5"
        >
        </ul>
      </div>

      <div className="container-fluid">
        <ul
          style={{ color: "black" }}
          id="navbarNav"
          className="collapse navbar-collapse navbar-nav me-auto mb-2 mb-lg-0 nav-justified mx-5 "
        >
          <li className="nav-item mx-4 ">
            <NavLink
              style={{ borderRadius: "12px", color: "black", fontWeight: 600 }}
              exact
              activeClassName="active"
              aria-current="page"
              className="nav-link"
              to="/"
            >
              Ana Sayfa
            </NavLink>
          </li>
          <li className="nav-item mx-4  ">
            <NavLink
              className="nav-link   "
              style={{ borderRadius: "12px", color: "black", fontWeight: 600 }}
              activeClassName="active"
              to="/calisma-arkadaslarimiz"
            >
              Çalışma Arkadaşlarımız
            </NavLink>
          </li>
          <li className="nav-item mx-4 ">
            <NavLink
              className="nav-link "
              style={{ borderRadius: "12px", color: "black", fontWeight: 600 }}
              activeClassName="active"
              to="/uygulamalarimiz"
            >
              Uygulamalar
            </NavLink>
          </li>
          <li className="nav-item mx-4">
            <NavLink
              className="nav-link "
              style={{ borderRadius: "12px", color: "black", fontWeight: 600 }}
              to="/mevzuat"
              activeStyle={{ color: "red" }}
            >
              Mevzuat
            </NavLink>
          </li>
          <li className="nav-item mx-4">
            <NavLink
              className="nav-link "
              style={{ borderRadius: "12px", color: "black", fontWeight: 600 }}
              activeStyle={{ color: "red" }}
              to="/kilavuzlar"
            >
              Kılavuzlar
            </NavLink>
          </li>
          <li className="nav-item mx-4">
            <NavLink
              className="nav-link "
              style={{ borderRadius: "12px", color: "black", fontWeight: 600 }}
              activeClassName="active"
              to="/forum"
            >
              Forum
            </NavLink>
          </li>
          <li>
            <NavLink
              style={{ width: "100px", borderRadius: "12px" }}
              className="btn active mx-4 font-weight-bold"
              to="/giris"
            >
              GİRİŞ
            </NavLink>
          </li>
        </ul>
        <span class="navbar-text"></span>
      </div>
      <div className="login "></div>
    </nav>
  );

}
