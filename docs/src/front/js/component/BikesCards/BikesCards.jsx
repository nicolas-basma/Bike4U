import React from "react";
import { FormattedMessage } from "react-intl";
import "./bikesCards.css";

const BikesCards = ({ image, title, description, link }) => {

  return (
    <>
      <div className="wrapperBikeCard bike-card">
        <div className="card mt-3">
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title mb-4">{title}</h4>
            <p className="description">{description}</p>
          </div>
          <div className="btn">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <button className="customizeBikeBtn2"><FormattedMessage id="LearnMore" defaultMessage="Learn More"/></button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BikesCards;
