import React from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../../store/AppContext.jsx";

import Button from "../../component/Button.jsx";
import ModalForm from "../../component/ModalForm/ModalForm.jsx";
import MyCarousel from "../../component/MyCarousel/MyCarousel.jsx";

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
      </div>
    </>
  );
};

export default Home;
