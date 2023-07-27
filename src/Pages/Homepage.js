import React from 'react'

import Announcement from '../Components/Announcement'
import NavBar from '../Components/NavBar'


export default function Homepage() {
  return (
      <div className="row">
        <div className="col-8">
        <Announcement />
        <NavBar/>
        </div>
      <div className="col-4">
        Alper SONAT
      </div>
      </div>
    
  );

}
