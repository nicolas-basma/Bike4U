import React from "react";

import useStore from "../../store/AppContext.jsx";

import CustomizeBikeButton from "../../component/Button/Button.jsx";
import ModalForm from "../../component/ModalForm/ModalForm.jsx";
import MyCarousel from "../../component/MyCarousel/MyCarousel.jsx";

const Home = () => {
  const { store, actions } = useStore();

  const { logo } = store;


  return (
    <>
      <div className="text-center mt-5">
        <CustomizeBikeButton />
        <ModalForm />
      </div>

      <div>
        <MyCarousel />
      </div>
    </>
  );
};

export default Home;
