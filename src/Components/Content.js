import React from "react";
import { Route, Routes } from "react-router-dom";
import ColleaguesPage from "../Pages/ColleaguesPage";
import AppsPage from "../Pages/AppsPage";
import NavBar from "./NavBar";
import LegislationPage from "../Pages/LegislationPage";
import GuidesPage from "../Pages/GuidesPage";
import ForumPage from "../Pages/ForumPage";
import Homepage from "../Pages/Homepage";
import "../CssPages/content.css";


function Content() {
  return (
    <div
    style={{
        height: "85%",
        position: "fixed",
        top: "100px",
        width:"100%"
    }}
    >
    <Routes>
      <Route path="/" element={<NavBar></NavBar>} />
      <Route path="/calisma-arkadaslarimiz" element={<ColleaguesPage />} />
      <Route path="/uygulamalarimiz" element={<AppsPage />} />
      <Route path="/mevzuat" element={<LegislationPage />} />
      <Route path="/kilavuzlar" element={<GuidesPage />} />
      <Route path="/forum" element={<ForumPage />} />
    </Routes>
    <div style={{ height: "100%", overflowY: "hidden", overflowX:"hidden", width: "100% " }}>
      <Homepage />
    </div>
  </div>
  );
}

export default Content;

