import React from "react";
import Homepage from "../Pages/Homepage";
import NavBar from "./NavBar";
import "../CssPages/content.css";

export default function Content() {
  return (
    <div
      style={{
        height: "85%",
        position: "fixed",
        top: "100px",
        width:"100%"
      }}
    >
      <div style={{ height: "100%", overflowY: "hidden", overflowX:"hidden", width: "100% " }}>
        <Homepage />
      </div>
    </div>
  );
}
