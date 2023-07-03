import React, { useEffect, useState } from "react";
import { FormattedMessage, useIntl  } from "react-intl";
import { Tabs, Tab } from "react-bootstrap";
import infinity from "react-useanimations/lib/infinity";

import useStore from "../../store/AppContext.jsx";
import BikesCards from "../../component/BikesCards/BikesCards.jsx";
import {
  deleteFavoriteBike,
  deleteFavoritePart,
  getFavorites,
} from "../../utils/fetchFavorites.js";

import "./FavoritesView.css";
import UseAnimations from "react-useanimations";

const FavoritesView = () => {
  const intl = useIntl();
  const { store } = useStore();
  const { userInfo } = store;
  const [favUser, setFavUser] = useState({});
  const [changeB, setChangeB] = useState(false);
  const [changeP, setChangeP] = useState(false);
  const { favorites } = favUser;
  //const bikes = favorites ? favorites.bikes : null;
  const bikes = favorites?.bikes;
  //const parts = favorites ? favorites.parts : null;
  const parts = favorites?.parts;
  const getFav = async () => {
    const list = await getFavorites(userInfo.id);
    setFavUser(list);
  };

  useEffect(() => {
    getFav();
  }, [userInfo, changeB, changeP]);

  const handleDeleteFavBike = async (id) => {
    deleteFavoriteBike(userInfo.id, id);
    setChangeB(!changeB);
    getFav();
  };
  const handleDeleteFavPart = async (id) => {
    deleteFavoritePart(userInfo.id, id);
    setChangeP(!changeP);
    getFav();
  };

  return (
    <>
      <div className="container my-container your-bike">
        <Tabs
          defaultActiveKey="bikes"
          id="uncontrolled-tab-example"
          className="m-3 justify-content-center titleTabs"
        >
          <Tab eventKey="bikes" title={intl.formatMessage({ id: 'favoritesTabBikes', defaultMessage: "Bikes" })}>
            <div className="titleCards mt-3 mb-2 text-center">
              <FormattedMessage
                id="favoritesBikes"
                defaultMessage="Your Favorite Bikes"
              />
            </div>
            <div className="d-flex row justify-content-center">
              {bikes ? (
                bikes.map((bike, index) => {
                  return (
                    <React.Fragment key={bike.id + "-" + index}>
                      <div className="col-12 col-md-6 col-lg-4 fav">
                        <BikesCards
                          // key={bike.id + bike.title + myRandom()}
                          id={bike.id}
                          image={bike.image}
                          title={bike.title}
                          description={bike.description}
                          link={bike.link}
                        />
                        <div className="d-flex justify-content-center">
                          <button
                            className="customizeBikeBtn2"
                            // key={bike.id + bike.title + myRandom()}
                            onClick={() => handleDeleteFavBike(bike.id)}
                          >
                            <FormattedMessage
                              id="favoritesQuitar"
                              defaultMessage="Quitar"
                            />
                          </button>
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })
              ) : (
                <span>
                  <UseAnimations animation={infinity} size={60} />
                </span>
              )}
            </div>
          </Tab>
          <Tab eventKey="parts" title={intl.formatMessage({ id: 'favoritesTabParts', defaultMessage: "Parts" })}>
            <div className="titleCards mt-3 mb-2 text-center">
              <FormattedMessage
                id="favoritesParts"
                defaultMessage="Your Favorite Parts"
              />
            </div>
            <div className="d-flex row justify-content-center">
              {parts ? (
                parts.map((part, index) => {
                  return (
                    <React.Fragment key={part.id + "-" + index}>
                      <div className="col-12 col-md-6 col-lg-4 fav">
                        <BikesCards
                          //key={part.id + '-' + part.title + myRandom()}
                          id={part.id}
                          image={part.image}
                          title={part.title}
                          description={part.description}
                          link={part.link}
                        />
                        <div className="d-flex justify-content-center">
                          <button
                            className="customizeBikeBtn2"
                            // key={bike.id + bike.title + myRandom()}
                            onClick={() => handleDeleteFavPart(part.id)}
                          >
                            <FormattedMessage
                              id="favoritesQuitar"
                              defaultMessage="Quitar"
                            />
                          </button>
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })
              ) : (
                <span>
                  <UseAnimations animation={infinity} size={60} />
                </span>
              )}
            </div>
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default FavoritesView;
