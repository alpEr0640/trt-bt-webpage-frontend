import React, { useEffect, useState } from "react";
import "../CssPages/Announcement.css";
import axios from "axios";
import { basebackendurl } from "../constants";
import { dateTimeSelector } from "../utils";
import AnnouncementModal from "./AnnouncementModal";

export default function Announcement() {
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(
         `${basebackendurl}announcements/uploads`
        );

        setTodos(response.data.reverse());
      } catch (err) {
        console.log("error fetch announcement api:", err);
      }
    };
    fetchTodos();
  }, []);

  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(5);

  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(todos.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = todos.slice(indexOfFirstItem, indexOfLastItem);

  const renderData = (data) => {
    return (
      <div className="entries">
        {data.map((item) => {
          return (
            <div key={item.id} className="announcementItemBody ">
              <div className="Left">
                <div className="leftTop">
                  {" "}
                  {dateTimeSelector(item.uploadTime).day}
                </div>
                <div className="leftBottom">
                  {dateTimeSelector(item.uploadTime).month}
                </div>
              </div>
              <a
                onClick={() => {
                  setTempItem(item);
                  handleEditUser(item);
                  handleShowModal();
                }}
              >
                <div className="right">{item.title}</div>
              </a>
            </div>
          );
        })}
      </div>
    );
  };

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };
  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage === number ? "isActive" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  return (
    <div className="announcement shadow">
      <div className="announcementHead">
        <h2>Duyurular</h2>
      </div>
      <div className="announcementBody">
        {renderData(currentItems)}
        <div className="pagination">
          <div className="paginationBody">
            <div className="paginationItem">
              <ul className="pageNumbers">
                <button
                  className="page-btn"
                  onClick={handlePrevbtn}
                  disabled={currentPage === pages[0] ? true : false}
                >
                  <i class="fa-solid fa-circle-chevron-left fa-xl"></i>
                </button>

                {renderPageNumbers}

                <button
                  className="page-btn "
                  onClick={handleNextbtn}
                  disabled={
                    currentPage === pages[pages.length - 1] ? true : false
                  }
                >
                  <i class="fa-solid fa-circle-chevron-right fa-xl"></i>
                </button>
              </ul>
            </div>
          </div>
        </div>

        <AnnouncementModal
          showModal={showModal}
          setShowModal={setShowModal}
          handleShowModal={handleShowModal}
          todos={todos}
          tempItem={tempItem}
        />
      </div>
    </div>
  );
}
