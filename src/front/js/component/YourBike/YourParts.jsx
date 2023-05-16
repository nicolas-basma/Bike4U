import React from "react";
import "./YourParts.css";
import { FormattedMessage } from "react-intl";



const YourParts = ({image, link, title, next, back, part}) => {

    return (
        <>
        <div className="col">
        <div className="img-part">
            <img src={image} aria-label={title} className="part-img"  />
        </div>
        <div className="btns">
            <button className="customizeBikeBtn2" onClick={()=>back(part)}>  <FormattedMessage id="Before"></FormattedMessage></button>
            <a href={link} target="_blank" rel="noopener noreferrer"><button className="customizeBikeBtn2">  <FormattedMessage id="LearnMore"></FormattedMessage></button></a>
            <button className="customizeBikeBtn2"onClick={()=>next(part)}>  <FormattedMessage id="Next"></FormattedMessage></button>
        </div>
        </div>
        </>

    );
}

export default YourParts;

