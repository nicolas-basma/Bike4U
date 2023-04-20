import React from "react";
import Products from "./Products.jsx";

function ProductGrid({ sections }) {
  return (
    <div className="container">
      <div className="row">
        {sections.map((section, index) => {
          return <Products section={section} key={index} />;
        })}
      </div>
    </div>
  );
}

export default ProductGrid;
