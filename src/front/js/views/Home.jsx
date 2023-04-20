import React from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../store/AppContext.jsx";

import "../../styles/home.css";

import Button from "../component/Button.jsx";
import MyCarousel from "../component/MyCarousel.jsx";

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
        
        <Button  label={"Personaliza tu Bicicleta"} />
      </div>

      <div>
        <MyCarousel />
      </div>
    </>
  );
};

export default Home;
