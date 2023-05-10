import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";

function Product({ title, image, id }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/product/${id}`);
  };
  return (
    <div onClick={handleNavigate}>
      <img className="productImage" src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}

export default Product;
