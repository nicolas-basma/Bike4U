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




  return (

    // <Link to="/customizeBike">
      <button className="customizeBikeBtn" onClick={handleisInvited}>
      <FormattedMessage id="customizeBikeButton"></FormattedMessage>
      </button>
    // </Link>


  )
}
export default CustomizeBikeButton;
