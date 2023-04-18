import React from "react";
import { useNavigate } from "react-router-dom";

function Product({ name, price, image, id }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/product/${id}`);
  };
  return (
    <div className="col-12 col-md-4" onClick={handleNavigate}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
}

export default Product;
