import React from "react";
import Announcement from "../Components/Announcement";
import "../CssPages/Homepage.css";
import PhoneNumbers from '../Components/PhoneNumbers'

export default function Homepage() {
  return (
    <div style={{ height: "100%" , overflowX:"hidden", overflowY:"hidden"}} className="row">
      <div className="col-8">
        <Announcement />
      </div>
      <div className="col-4">
      <PhoneNumbers/>
      </div>
    </div>
  );
}
