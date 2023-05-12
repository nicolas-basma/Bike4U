import React, { useState, useEffect } from "react";
import Products from "./Products.jsx";
import fetchGetBikes from "../../utils/fetchGetBikes.js";

function ProductGrid() {
  const [roadBikes, setRoadBikes] = useState([]);
  const [mtbBikes, setMtbBikes] = useState([]);
  const [urbanBikes, setUrbanBikes] = useState([]);
  useEffect(() => {
    fetchGetBikes("urban", setUrbanBikes);
    fetchGetBikes("mtb", setMtbBikes);
    fetchGetBikes("road", setRoadBikes);
  }, []);
  return (
    <div className="container">
      <div className="row">
       <Products  title={"urban"} products={urbanBikes.slice(0,3)} />
       <Products  title={"mtb"} products={mtbBikes.slice(0,3)} />
       <Products  title={"road"} products={roadBikes.slice(0,3)} />
      </div>
    </div>
  );
}

export default ProductGrid;
