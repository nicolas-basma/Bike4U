import React, { Component } from "react";

import "./MyFooter.css";
import { Context } from "../store/appContext";

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
    <footer className="footer mt-auto py-3 text-center">
          <div>
            
          </div>
          <p>bike4u</p>
          <p>Do not hesitate to contact us at:</p>
          <p>contact.bike4u@gmail.com</p>
          <UseAnimations animation={twitter} size={60} />
          <UseAnimations animation={facebook} size={60} />
          <UseAnimations animation={instagram} size={60} />
          <UseAnimations animation={mail} size={60} />

    </footer>
  );
};

export default MyFooter;
