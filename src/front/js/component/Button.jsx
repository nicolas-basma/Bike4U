import React from "react";

function Button(props) {
  return (
    <div className="d-grid gap-2 col-12 mx-auto">
      <button className="btn btn-primary" onClick={props.onClick}>
        {props.label}
      </button>
    </div>
  );
}

export default Button;
