import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";


function Product({ title, image, terrain, id }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/product/${terrain}/${id}`);
  };
  
  return (
    <div onClick={handleNavigate}>
      <img className="productImage" src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}

export default Product;
