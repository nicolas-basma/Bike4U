import React from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../../store/AppContext.jsx";

import Button from "../../component/Button.jsx";
import ModalForm from "../../component/ModalForm/ModalForm.jsx";
import MyCarousel from "../../component/MyCarousel/MyCarousel.jsx";
import ProductGrid from "../../component/ProductGrid/ProductGrid.jsx";

const products = [
  { 
    id:1,
    name: "Product 1",
    price: "$10",
    image: "product1.jpg",
  },
  {
    id:2,
    name: "Product 2",
    price: "$20",
    image: "product2.jpg",
  },
  { id:3,
    name: "Product 3",
    price: "$30",
    image: "product3.jpg",
  },
  // adicione mais produtos aqui
];

const Home = () => {
  const { store, actions } = useStore();

  const { logo } = store;

  const navigator = useNavigate();

  const handleNavigator = () => {
    navigator("/");
  };

  return (
    <>
      <div className="text-center mt-5">
        <Button onClick={handleNavigator} label={"Personaliza tu Bicicleta"} />
        <ModalForm />
      </div>

      <div>
        <MyCarousel />
        <ProductGrid products={products} />
      </div>
    </>
  );
};

export default Home;
