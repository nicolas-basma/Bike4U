import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import "./Button.css"

const CustomizeBikeButton = () => {


  return (

    <Link to="/customizeBike">
      <button className="customizeBikeBtn">
      <FormattedMessage id="customizeBikeButton"></FormattedMessage>
      </button>
    </Link>


  )
}
export default CustomizeBikeButton;
