import React from "react";
import Product from "./Product.jsx";

function Products({ section }) {
  return (
    <div className="d-flex flex-column mb-3 col-12 col-md-4">
      <h2>{section.title}</h2>
      <div className="d-flex flex-column mb-3">
        {section.products.map((product, index) => {
          return <Product {...product} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Products;
