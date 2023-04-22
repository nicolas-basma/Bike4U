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
          <FormattedMessage id="aboutUsTittle"></FormattedMessage>
        </h1>
        <p>
          <FormattedMessage id="aboutUsDescription"></FormattedMessage>
        </p>
      </div>
      <div>
        <h1>
          <button className="contactButton" onClick={handleShow}>
            <FormattedMessage id="buttonContact"></FormattedMessage>
          </button>
          <ModalForm />
        </h1>
      </div>
    </div>
  );
};

export default AboutUs;
