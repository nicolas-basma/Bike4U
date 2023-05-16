import React, { useState, useEffect } from "react";
import useStore from "../../store/AppContext.jsx";
import { FormattedMessage } from "react-intl";
import fetchGetBikes from "../../utils/fetchGetBikes.js";
import fetchGetPartByTypeTerrainAndSize from "../../utils/fetchGetPartByTypeTerrainAndSize.js";
import { useParams } from "react-router-dom";

import YourBike from "../../component/YourBike/YourBike.jsx";
import BikesCards from "../../component/BikesCards/BikesCards.jsx";
import PartsCards from "../../component/PartsCards/partsCards.jsx";
import "./CustomizeBike.css";
import BackToTopButton from "../../component/BackToTopButton.jsx";
import fetchGetAllBikesSpecificTerrain from "../../utils/fetchGetAllBikesSpecificTerrain.js";

const CustomizeBike = () => {
  const { store } = useStore();
  const params = useParams();
  const [bikeMtb, setBikeMtb] = useState({});
  const [bikeUrban, setBikeUrban] = useState({});
  const [bikeRoad, setBikeRoad] = useState({});
  const [parts, setParts] = useState({});
  const { userInfo } = store;
  const [listOfPart, setListOfPart] = useState([]);
  const [userBike, setUserBike] = useState([]);

  const getElements = async () => {
    fetchGetBikes("mtb", setBikeMtb);
    fetchGetBikes("urban", setBikeUrban);
    fetchGetBikes("road", setBikeRoad);

    fetchGetPartByTypeTerrainAndSize("road", "s").then((res) => setParts(res));
  };

  useEffect(() => {
    getElements();
  }, []);

  const info = async () => {
    const arrayOfBikes = await fetchGetAllBikesSpecificTerrain(
      userInfo.bike_type,
      setUserBike
    );
    setUserBike(arrayOfBikes);

    const arrayOfParts = await fetchGetPartByTypeTerrainAndSize(
      userInfo.bike_type,
      userInfo.size
    );
    setListOfPart(arrayOfParts);
  };
  useEffect(() => {
    if (userInfo && userInfo.bike_type && userInfo.size) {
      info();
    }
  }, [userInfo]);

  const myRandom = () => {
    return Math.floor(Math.random() * 10000);
  };

  return (
    <>
      <YourBike key={myRandom()} list={listOfPart} bikes={userBike} />
      <div className="titleCards mt-5 text-center">
        <FormattedMessage id="myBikesFavouriteView"></FormattedMessage>
      </div>
      <div className="row">
        <div className="col-2">
          <div id="list-example" className="list-group">
            <a
              className="list-group-item list-group-item-action menuBikes"
              href="#list-item-1"
            >
              <h1 className="BikeTerrainTitle">MTB Bikes</h1>
            </a>
            <a
              className="list-group-item list-group-item-action menuBikes"
              href="#list-item-2"
            >
              <h1 className="BikeTerrainTitle">Road Bikes</h1>
            </a>
            <a
              className="list-group-item list-group-item-action menuBikes"
              href="#list-item-3"
            >
              <h1 className="BikeTerrainTitle">Urban Bikes</h1>
            </a>
          </div>
        </div>
        <div className="col">
          <div
            data-bs-spy="scroll"
            data-bs-target="#list-example"
            data-bs-smooth-scroll="true"
            className="scrollspy-example"
            tabIndex="0"
          >
            <h4 id="list-item-1">
              <a
                className="list-group-item list-group-item-action"
                href="#list-item-1"
              >
                <h1 className="BikeTerrainMainTitle">MTB Bikes</h1>
              </a>
              <div className="wrapperBikesCards">
                {bikeMtb.length
                  ? bikeMtb.map((element, index) => {
                      return (
                        <BikesCards
                          key={index}
                          id={element.id}
                          image={element.image}
                          title={element.title}
                          description={element.description}
                          link={element.link}
                        />
                      );
                    })
                  : null}
              </div>
            </h4>
            <h4 id="list-item-2">
              <a
                className="list-group-item list-group-item-action"
                href="#list-item-2"
              >
                <h1 className="BikeTerrainMainTitle">Road Bikes</h1>
              </a>
              <div className="wrapperBikesCards">
                {bikeRoad.length
                  ? bikeRoad.map((element, index) => {
                      return (
                        <>
                          <BackToTopButton />
                          <BikesCards
                            key={index}
                            id={element.id}
                            image={element.image}
                            title={element.title}
                            description={element.description}
                            link={element.link}
                          />
                        </>
                      );
                    })
                  : null}
              </div>
            </h4>
            <h4 id="list-item-3">
              <a
                className="list-group-item list-group-item-action"
                href="#list-item-2"
              >
                <h1 className="BikeTerrainMainTitle">Urban Bikes</h1>
              </a>
              <div className="wrapperBikesCards">
                {bikeUrban.length
                  ? bikeUrban.map((element, index) => {
                      return (
                        <BikesCards
                          key={index}
                          id={element.id}
                          image={element.image}
                          title={element.title}
                          description={element.description}
                          link={element.link}
                        />
                      );
                    })
                  : null}
              </div>
            </h4>
            <div className="titleCards mt-5 text-center">
              <FormattedMessage id="myPartsFavouriteView"></FormattedMessage>
            </div>
            <div className="wrapperBikesCards">
              {parts.length
                ? parts.map((element, index) => {
                    return (
                      <PartsCards
                        key={index}
                        id={element.id}
                        image={element.image}
                        title={element.title}
                        description={element.description}
                        link={element.link}
                      />
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomizeBike;
