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
      <div className="product">
      <img className="img-fluid" src={image} alt={title} />
      <h3>{title}</h3>
    </div>
    </div>
  );
}

export default Product;
