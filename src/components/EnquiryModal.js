import { Modal } from "react-bootstrap";
import React from "react";
import { Heading } from "./styles/StyledHeadings";
import EnquiryForm from "./forms/EnquiryForm";
import { ENQUIRY_URL, POPULATE } from "../utils/api";
import axios from "axios";
import { useParams } from "react-router-dom";
require("react-bootstrap/ModalHeader");

function EnquiryModal(props) {
  const { location } = useParams();
  console.log(location);
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
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Send your booking enquiry
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <EnquiryForm sendEnquiry={sendEnquiry} />
      </Modal.Body>
    </Modal>
  );
}

export default EnquiryModal;
