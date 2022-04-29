import { Modal } from "react-bootstrap";
import React from "react";
import { Heading } from "./styles/StyledHeadings";
import EnquiryForm from "./EnquiryForm";
import { ENQUIRY_PATH } from "../utils/api";
import axios from "axios";
require("react-bootstrap/ModalHeader");

function EnquiryModal(props) {
  const sendEnquiry = async (formData) => {
    const options = {
      data: {
        email: formData.email,
        date: formData.date,
        information: formData.information,
      },
    };
    const responseData = await axios.post(ENQUIRY_PATH, options);
    console.log(responseData);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Send your booking enquiry
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Heading as={"h3"}>Testing</Heading>
        <EnquiryForm sendEnquiry={sendEnquiry} />
      </Modal.Body>
    </Modal>
  );
}

export default EnquiryModal;
