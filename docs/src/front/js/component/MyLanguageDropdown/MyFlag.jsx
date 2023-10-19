import React from "react";

const MyFlag = ({ flag }) => {
  return (
    <div className="language-dropdown-image-wrapper">
      <img className="img-fluid" src={flag} alt="" />
    </div>
  );
};

export default MyFlag;
