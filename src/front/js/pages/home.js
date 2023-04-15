import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Button from "../component/Button.jsx";
import { useNavigate } from "react-router-dom";
import MyCarousel from "../component/MyCarousel.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  const navigator = useNavigate();

  const handleNavigator = () => {
    navigator("/demo");
  };

  return (
    <>
      <div className="text-center mt-3">
        <Button onClick={handleNavigator} label={"Personaliza tu Bicicleta"} />
      </div>
      <div>
        <MyCarousel />
      </div>
    </>
  );
};
