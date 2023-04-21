import React, { useState } from "react";
import ModalForm from "../../component/ModalForm/ModalForm.jsx";
import useStore from "../../store/AppContext.jsx";
import { Button } from "react-bootstrap";
import "./AboutUs.css";

const AboutUs = () => {
  const { action } = useStore();
  const { handleShow } = action;

  return (
    <div className="container">
      <div className="about">
        <h1>¿Quienes somos?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          aliquet orci et nunc congue, at efficitur enim ullamcorper. Vivamus ex
          felis, accumsan sed lobortis in, consequat sit amet purus. Aenean
          blandit eleifend gravida. Donec vel ex sed justo commodo sodales sit
          amet non nisl. Proin et dolor justo. Fusce sit amet dignissim eros, id
          posuere orci. Nulla et dui fermentum, viverra leo eu, egestas lectus.
          In hac habitasse platea dictumst. Sed nec velit sit amet diam
          tincidunt tristique nec eget felis. Aenean mollis dolor et dapibus
          efficitur. Suspendisse potenti. Pellentesque elementum augue nec
          porttitor elementum. Proin malesuada ac ligula nec varius. Integer
          pharetra lorem non ligula pharetra semper et sit amet augue. Curabitur
          ac convallis risus. Integer eu laoreet urna. In et ante varius,
          ultricies tortor sed, dictum metus. Sed libero arcu, tristique ac elit
          sit amet, feugiat vestibulum augue. Fusce vulputate imperdiet ligula,
          at pellentesque odio laoreet ut. Cras at urna lacus. Mauris efficitur
          aliquet velit a mattis. Cras tellus lorem, rutrum eget arcu egestas,
          venenatis gravida sapien. Sed vitae lacinia metus, sed dapibus orci.
          Proin blandit efficitur mauris ut tincidunt. Nunc a auctor quam, vel
          blandit turpis. Fusce sed ligula ac ex ultrices pretium. Mauris
          fermentum dapibus nibh. Aliquam rhoncus mi nibh, ut rhoncus tellus
          porta eget.
        </p>
      </div>
      <div>
        <h1>
          <button className="contactButton" onClick={handleShow}>
            Contact us
          </button>
          <ModalForm />
        </h1>
      </div>
    </div>
  );
};

export default AboutUs;
