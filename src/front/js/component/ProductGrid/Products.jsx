import React, { useState, useEffect } from "react";
import Product from "./Product.jsx";
import fetchGetBikes from "../../utils/fetchGetBikes.js";

function Products({title, products}) {
  
  return (
    <div className="d-flex flex-column mb-3 col-12 col-md-4">
      <h2>{title}</h2>
      <div className="d-flex flex-column mb-3">
        {products.map((product, index) => {
          return <Product {...product} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Products;
