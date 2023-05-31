import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

import ModalForm from "../../component/ModalForm/ModalForm.jsx";
import useStore from "../../store/AppContext.jsx";

import "./AboutUs.css";

const AboutUs = () => {
  const { action } = useStore();
  const { handleShow } = action;

  return (
    <div className="container">
      <div className="about">
        <h1>
          <FormattedMessage id="aboutUsTittle"/>
        </h1>
          <FormattedMessage id="aboutUsDescription"/>
      </div>
      <div className="btnContactUs">
          <button className="contactButton" onClick={handleShow}>
            <FormattedMessage id="buttonContact"/>
          </button>
          <ModalForm />
      </div>
    </div>
  );
};

export default AboutUs;
