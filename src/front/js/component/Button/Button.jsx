import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import useStore from "../../store/AppContext.jsx";

import "./Button.css"

const CustomizeBikeButton = () => {
  const navigate = useNavigate();
  const { store, action } = useStore();
  const { askInfo, isInvited } = store;
  const { setAskInfo } = action;
 

  const handleisInvited = () => {
    if (isInvited) {
    setAskInfo(true);
    }
    else {
      navigate("/customizeBike");
    }
  };

//col-12 col-s-4 col-md-8 col-lg-6
  return (

    // <Link to="/customizeBike">
      <button className="my-5 mx-auto mx-s-2 mx-md-3 mx-l-4 mx-xl-5 p-4 customizeBikeBtn" onClick={handleisInvited}>
        <h1>
          <FormattedMessage id="customizeBikeButton"></FormattedMessage>
        </h1>
      </button>
    // </Link>


  )
}
export default CustomizeBikeButton;
