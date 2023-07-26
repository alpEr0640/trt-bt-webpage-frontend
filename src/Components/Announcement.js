import React from 'react'
import "../CssPages/Announcement.css"

export default function Announcement() {
  return (
    <div className="announcement">
      <div className="announcementHead">
        <h1>DUYURULAR</h1>
      </div>
      <hr />
      <div className="announcementBody ">
        <div className="Left ">
          <div className="leftTop">24</div>
          <div className="leftBottom">ABDULLAH </div>
        </div>
        <div className="right">BURAYA İNSANLAR DUYURU GİRECEK</div>
      </div>
      <div className="announcementBody">
        <div className="Left">
          <div className="leftTop active">24</div>
          <div className="leftBottom">QENANE</div>
        </div>
        <div className="right">BURAYA İNSANLAR DUYURU GİRECEK</div>
      </div>
      
    </div>
  );
}
