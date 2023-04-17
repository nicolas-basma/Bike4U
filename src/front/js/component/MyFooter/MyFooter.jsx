import React from "react";

import "./MyFooter.css";

import UseAnimations from "react-useanimations";
import twitter from "react-useanimations/lib/twitter";
import facebook from "react-useanimations/lib/facebook";
import instagram from "react-useanimations/lib/instagram";
import mail from "react-useanimations/lib/mail";

const MyFooter = () => {
  //const { store } = useContext(Context);
  //const { languages, envParameters } = store;

  //console.log(store);

  return (
    <footer className="footer mt-auto py-1 text-center d-block bg-dark text-white">
      <div className="mb-2">
        <p className="m-0">bike4u</p>
        <p className="m-0">Do not hesitate to contact us at:</p>
        <p className="m-0">contact.bike4u@gmail.com</p>
      </div>
      <div className="d-flex justify-content-center">
        <UseAnimations animation={twitter} size={60} strokeColor={"white"} />
        <UseAnimations animation={facebook} size={60} strokeColor={"white"} />
        <UseAnimations animation={instagram} size={60} strokeColor={"white"} />
        <UseAnimations animation={mail} size={60} strokeColor={"white"} />
      </div>
    </footer>
  );
};

export default MyFooter;
