import React from "react";
import { Carousel } from "react-bootstrap";

import "/workspace/FinalProject/src/front/js/component/MyCarousel.css";

const MyCarousel = () => {
  return (
    <Carousel fade className="container">
      <Carousel.Item className="imageContainer">
        <img
          className="image"
          src="https://labicicleta.info/wp-content/uploads/2016/12/fixie.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className="imageContainer">
        <img
          className="image"
          src="https://resize.sprintercdn.com/f/550x550/products/0337071/frejus-26vb-sra-bicicleta-acero-18v-ciclismo_0337071_00_4_773676386.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className="imageContainer">
        <img
          className="image"
          src="https://www.recambiosanchez.com/3577/bicicleta-orbea-alma-m50-2022-mtb-rigida-de-carbono.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
