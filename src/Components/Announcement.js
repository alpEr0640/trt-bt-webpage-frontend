import React, { useEffect, useState } from "react";
import "../CssPages/Announcement.css";
import axios from "axios";

export default function Announcement() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(
          "http://172.30.9.107:8080/api/announcements/uploads"
        );
        setTodos(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTodos();
  }, []);
  return (
    <div className="announcement shadow">
      <div className="announcementHead">
        <h1>DUYURULAR</h1>
      </div>
      <div className="announcementBody">
        {todos.map((alper) => {
          return (
            <div key={alper.id} className="announcementItemBody ">
              <div className="Left ">
                <div className="leftTop">{alper.id}</div>
                <div className="leftBottom">Temmuz</div>
              </div>
              <div className="right">{alper.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
