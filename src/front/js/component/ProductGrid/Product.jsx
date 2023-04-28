import React from "react";
import { useNavigate } from "react-router-dom";
import "/workspaces/FinalProject/src/front/js/component/ProductGrid/Product.css"

function Product({ name, price, image, id }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/product/${id}`);
  };
  return (
    <div onClick={handleNavigate}>
      <img className="productImage" src={image} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
}

export default Product;
