import React from "react";

import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import "./bikesCards.css"


const BikesCards = ({ image, title, description, link }) => {

    return (
        <>
            <div className="wrapperBikeCard bike-card">
            <div className="card mt-3 ms-5 ">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={link} target="_blank" rel="noopener noreferrer"><button className="customizeBikeBtn2" >Learn More</button></a>
                </div>
            </div>
            </div>
            
        </>
    );
}

export default BikesCards;
