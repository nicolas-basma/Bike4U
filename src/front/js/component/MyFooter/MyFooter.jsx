import React from "react";
import useStore from "../../store/AppContext.jsx";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

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
  const { store, action } = useStore();
  const { logo } = store;
  return (
    <footer className="footer mt-1 py-1 text-center d-block">
      <div className=" container">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-3 d-flex justify-content-center">
            <div className="company">
              <strong>BIKE4U</strong>
              <br></br>
              <img className="footer-logo" src={logo} />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <Link to="/aboutus">
              <p><FormattedMessage id="footerAboutUs" defaultMessage="About Us"/></p>
            </Link>
            <Link to="/faqs">
              <p><FormattedMessage id="footerFAQ" defaultMessage="Frequent Questions"/></p>
            </Link>
            <p></p>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <p>
              <Link to="/legalpolicy">
                <FormattedMessage id="footerLegalAdvisory"/>
              </Link>
            </p>
            <p>
              <Link to="/legalpolicy">
                <FormattedMessage id="footerPrivacyPolicy"/>
              </Link>
            </p>
            <p>
              <Link to="/legalpolicy">
                <FormattedMessage id="footerCookiesPolicy"/>
              </Link>
            </p>
          </div>

          <div className="col-12 col-md-12 col-lg-3 mx-auto">
            <div className="contact d-flex justify-content-center">
              <a href="https://twitter.com/" target="_blank">
                {" "}
                <UseAnimations
                  animation={twitter}
                  size={60}
                  strokeColor={"white"}
                />
              </a>
              <a href="https://facebook.com/" target="_blank">
                <UseAnimations
                  animation={facebook}
                  size={60}
                  strokeColor={"white"}
                />{" "}
              </a>
              <a href="https://instagram.com/" target="_blank">
                <UseAnimations
                  animation={instagram}
                  size={60}
                  strokeColor={"white"}
                />{" "}
              </a>
              <a href="">
                <UseAnimations animation={mail} size={60} strokeColor={"white"} />
              </a>
              
            </div>
            <div>
              <p>
                <strong>
                  <FormattedMessage id="footerContactBySocials"/>
                </strong>
              </p>
            </div>
          </div>
        </div>

        <div className="copyright row">
          <div className="col-12">
            <FormattedMessage id="footerCopyright"/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
