import React from "react";
import Product from "./Product.jsx";

function ProductGrid({ products }) {
  return (
    <div className="container">
      <div className="row">
        {products.map((product, index) => {
          return <Product {...product} key={index} />;
        })}
      </div>
    </div>
  );
}

export default ProductGrid;
