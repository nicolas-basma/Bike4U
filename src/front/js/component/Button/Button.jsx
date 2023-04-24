import React from "react";
import { Link } from "react-router-dom";

function Button(props) {
  return (
    <div className="d-grid gap-2 col-12 mx-auto">
      <button
        className="btn btn-primary"
        onClick={props.onClick}
        id="buttonCustomizeBike"
      >
        <Link to="{/customizeBike}">{props.label}</Link>
      </button>
    </div>
  );
}

export default Button;
