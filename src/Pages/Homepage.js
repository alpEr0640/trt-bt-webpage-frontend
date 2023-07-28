<<<<<<< HEAD
import React from 'react'
import PhoneNumbers from '../Components/PhoneNumbers'
import Banaait from '../Components/Banaait'

function Homepage() {
  return (
    <div className='row'>
        <div className='col-8'>
        
        </div>
        <div  className='col-4'>
         <PhoneNumbers ></PhoneNumbers> 
        {/* <Banaait></Banaait> */}
        </div>
        
        
    </div>
  )
}

export default Homepage
=======
import React from "react";
import Announcement from "../Components/Announcement";
import "../CssPages/Homepage.css";

export default function Homepage() {
  return (
    <div style={{ height: "100%" , overflowX:"hidden", overflowY:"hidden"}} className="row">
      <div className="col-8">
        <Announcement />
      </div>
      <div className="col-4"></div>
    </div>
  );
}
>>>>>>> f9876319894839c7bb095aa25fc97efe0cf6ff5d
