import { Modal } from "react-bootstrap";
import React from "react";
import EnquiryForm from "./forms/EnquiryForm";
import { ENQUIRY_URL, POPULATE } from "../utils/api";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useToggle } from "../hooks/useToggle";
require("react-bootstrap/ModalHeader");

function EnquiryModal(props) {
  const { location } = useParams();
  const [toggle, setToggle] = useToggle();

  const sendEnquiry = async (formData) => {
    const options = {
      data: {
        email: formData.email,
        date: formData.date,
        information: formData.information,
        establishment: location,
      },
    };
    const responseData = await axios.post(ENQUIRY_URL + POPULATE, options);
    console.log(responseData);
    setToggle();
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Send your booking enquiry
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {toggle ? (
          <div>
            Thank you! We will confirm your booking as soon as possible.
          </div>
        ) : (
          <EnquiryForm sendEnquiry={sendEnquiry} />
        )}
      </Modal.Body>
    </Modal>
  );
}

export default EnquiryModal;
