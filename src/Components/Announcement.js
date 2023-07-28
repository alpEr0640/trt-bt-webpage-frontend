import React, { useEffect, useState } from "react";
import "../CssPages/Announcement.css";
import axios from "axios";
import { basebackendurl } from "../constants";
import { dateTimeSelector } from "../utils"
import AnnouncementModal from "./AnnouncementModal";

export default function Announcement() {
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(
         `${basebackendurl}announcements/uploads`
        );
        console.log("🚀 ~ file: Announcement.js:15 ~ fetchTodos ~ response:", response.data)
        setTodos(response.data);
        console.log("🚀 ~ file: Announcement.js:22 ~ fetchTodos ~ response.data:", response.data)
      } catch (err) {
        console.log("error fetch announcement api:",err);
      }
    };
    fetchTodos();
  }, []);
  return (
    <div className="announcement shadow">
      <div className="announcementHead">
        <h2>Duyurular</h2>
      </div>
      <div className="announcementBody">
        {todos.map((alper) => {
          return (
            <div key={alper.id} className="announcementItemBody ">
              <div className="Left ">
                <div className="leftTop">
                  {dateTimeSelector(alper.uploadTime).day}
                </div>
                <div className="leftBottom">
                  {dateTimeSelector(alper.uploadTime).month}
                </div>
              </div>
              <a >
                <div className="right">{alper.title}</div>
              </a>
            </div>
          );
        })}
        <AnnouncementModal  />
      </div>
    </div>
  );
}
