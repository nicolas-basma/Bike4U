import React, { useState, useEffect } from "react";
import MyCarousel from "../../component/MyCarousel/MyCarousel.jsx";
import useStore from "../../store/AppContext.jsx";
import { useParams } from "react-router-dom";
import fetchGetBikeByTerrainAndByID from "../../utils/fetchGetBikeByTerrainAndByID.js";
import "./ProductView.css"
import { Button } from 'react-bootstrap';


function ProductView() {
  const { store } = useStore();
  const { carouselHomePhotos } = store;
  const params = useParams()
  const [bike, setBike] = useState({});
  useEffect(()=>{
    fetchGetBikeByTerrainAndByID(params.terrain, params.id, setBike)
  },[])
console.log(bike)

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img src={bike.image} />
        </div>
        <div className="col">
          <h1>{bike.title}</h1>
          <a href={bike.link} target="_blank">
          <Button className="btn btn-secondary patata" ><h5>Conozca mas !!!</h5></Button>
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <MyCarousel photos={carouselHomePhotos} />
        </div>
      </div>
    </div>
  );
}

export default ProductView;
