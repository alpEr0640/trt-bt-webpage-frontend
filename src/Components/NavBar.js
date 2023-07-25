import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import logo from "../images/trt.png"

function NavBar() {
  return (
    <div style={{height:"1000px"}}>
      

    <nav style={{position:"fixed",borderRadius:"12px"}} className="navbar navbar-expand-lg fixed-top navbar-light  shadow p-1  m-4">
      <div   classNameName="logo container">
        <a className="navbar-brand" href="#">
        <img src={logo} alt="trtLogo" style={{height: '100%'}} />

        </a>
      </div>
      <div
         className="container-fluid "
         id="navbarsExample08"
         >
        <ul className="nav nav-pills nav-fill ">
          <li className="nav-item mx-4 ">
            <a className="flex-sm-fill text-sm-center nav-link active" style={{borderRadius:"12px"}} aria-current="page" href="#">
              Ana Sayfa
            </a>
          </li>
          <li className="nav-item mx-4">
            <a className="flex-sm-fill text-sm-center nav-link  " style={{borderRadius:"12px"}} href="#">
              Çalışma Arkadaşlarımız
            </a>
          </li>
          <li className="nav-item mx-4">
            <a className="flex-sm-fill text-sm-center nav-link " style={{borderRadius:"12px"}} href="#">
              Uygulamalar
            </a>
          </li>
          <li className="nav-item mx-4">
            <a className="flex-sm-fill text-sm-center nav-link " style={{borderRadius:"12px"}} href="#">
              Mevzuat
            </a>
          </li>
          <li className="nav-item mx-4">
            <a className="flex-sm-fill text-sm-center nav-link " style={{borderRadius:"12px"}} href="#">
              Kılavuzlar
            </a>
          </li>
          <li className="nav-item mx-4">
            <a className="flex-sm-fill text-sm-center nav-link " style={{borderRadius:"12px"}} href="#">
              Forum
            </a>
          </li>
        </ul>
      </div>
      <div classNameName="login ">
        <button style={{borderRadius:"12px"}} className="btn btn-danger mx-4">GİRİŞ</button>
      </div>
    </nav>
          </div>
  );
}

export default NavBar;
