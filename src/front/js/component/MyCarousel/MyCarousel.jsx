import React, {useState, useEffect} from "react";
import { Carousel } from "react-bootstrap";
import "./MyCarousel.css";
import fetchGetImages from "../../utils/fetchGetImages";

const MyCarousel = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetchGetImages(setPhotos)
  }, [

  ]);
  return (
    <Carousel className="container" variant="dark">
      {photos?.length
        ? photos.map((element, index) => {
            return (
              <Carousel.Item className="imageContainer" key={index}>
                <img className="image" src={element} alt="Third slide" />
              </Carousel.Item>
            );
          })
        : null}
    </Carousel>
  );
};
// return (
//   <Carousel fade className="container">
//     <Carousel.Item className="imageContainer">
//       <img
//         className="image"
//         src="https://actionbmxshop.net/12385-large_default/bicicleta-radio-asura-26-verde.jpg"
//         alt="Third slide"
//       />
//     </Carousel.Item>
//     <Carousel.Item className="imageContainer">
//       <img
//         className="image"
//         src="https://actionbmxshop.net/12408-large_default/bicicleta-radio-siren-26.jpg"
//         alt="Third slide"
//       />
//     </Carousel.Item>
//     <Carousel.Item className="imageContainer">
//       <img
//         className="image"
//         src="https://actionbmxshop.net/12434-large_default/bicicleta-dk-zenith-pro-xl.jpg"
//         alt="Third slide"
//       />
//     </Carousel.Item>
//     <Carousel.Item className="imageContainer">
//       <img
//         className="image"
//         src="https://actionbmxshop.net/11818-large_default/bicicleta-mongoose-title-mini.jpg"
//         alt="Third slide"
//       />
//     </Carousel.Item>
//     <Carousel.Item className="imageContainer">
//       <img
//         className="image"
//         src="https://actionbmxshop.net/10377-large_default/bicicleta-radio-legion-29.jpg"
//         alt="Third slide"
//       />
//     </Carousel.Item>
//     <Carousel.Item className="imageContainer">
//       <img
//         className="image"
//         src="https://actionbmxshop.net/12489-large_default/bicicleta-fairdale-weekender-archer-2023.jpg"
//         alt="Third slide"
//       />
//     </Carousel.Item>
//     <Carousel.Item className="imageContainer">
//       <img
//         className="image"
//         src="https://s.alicdn.com/@sc04/kf/H1f6d76ec62544a3b993508f77ffff6a6q.jpg_960x960.jpg"
//         alt="First slide"
//       />
//     </Carousel.Item>
//     <Carousel.Item className="imageContainer">
//       <img
//         className="image"
//         src="https://s.alicdn.com/@sc04/kf/H361659d7428945fab7f171d4d31b2b09Q.jpg_960x960.jpg"
//         alt="Second slide"
//       />
//     </Carousel.Item>
//     <Carousel.Item className="imageContainer">
//       <img
//         className="image"
//         src="https://www.recambiosanchez.com/3577/bicicleta-orbea-alma-m50-2022-mtb-rigida-de-carbono.jpg"
//         alt="Third slide"
//       />
//     </Carousel.Item>
//   </Carousel>
// );

export default MyCarousel;
