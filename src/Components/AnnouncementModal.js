import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import React, { useState } from "react";
import "../CssPages/AnnouncementModal.css";
import { basebackendurl } from "../constants";
import Announcement from "./Announcement";
import { Link } from "react-router-dom";
export default function AnnouncementModal(props) {
  const { showModal, setShowModal, tempItem } = props;

  const [tempAttachmentId, setAttachmentID] = useState("");

  const downloadClickled = () => {
    setAttachmentID(tempItem?.attachments?.attachmentID);
  };
  return (
    <div>
      <Modal isOpen={showModal}>
        <ModalHeader className="modalHeader">{tempItem?.title} </ModalHeader>
        <ModalBody>
          {tempItem?.content}

          <div className="ModalBodyHeader">Eklentiler</div>
          <div className="modalBody">
            {tempItem?.attachments.map((file) => {
              return (
                <div className="row modalBodyItem">
                  <div className="col-10 modalBodyLeftText">
                    {file.fileName}
                  </div>
                  <div className="col-2 modalBodyRightText">
                    <Link
                      to={
                        "http://192.168.137.1:8080/api/announcements/downloads/" +
                        `${file.attachmentID}`
                      }
                      target="_blank"
                    >
                      <i class="fa-solid fa-download"></i>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            className="buton"
            onClick={() => {
              setShowModal();
            }}
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
