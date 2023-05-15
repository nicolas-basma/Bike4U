import React, { useState, useEffect } from "react";
import useStore from "../../store/AppContext.jsx";
import { FormattedMessage } from "react-intl";
import fetchGetBikes from "../../utils/fetchGetBikes.js";
import fetchGetPartByTypeTerrainAndSize from "../../utils/fetchGetPartByTypeTerrainAndSize.js";;
import { useParams } from "react-router-dom";

import YourBike from "../../component/YourBike/YourBike.jsx";
import BikesCards from "../../component/BikesCards/BikesCards.jsx";
import PartsCards from "../../component/PartsCards/partsCards.jsx";
import "./CustomizeBike.css";
import fetchGetAllBikesSpecificTerrain from "../../utils/fetchGetAllBikesSpecificTerrain.js";

// image, title, description, link

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

  useEffect(() => {
    fetchGetBikes("mtb", setBikeMtb)
    fetchGetBikes("urban", setBikeUrban)
    fetchGetBikes("road", setBikeRoad)

    fetchGetPartByTypeTerrainAndSize("road", "s")
      .then((res) => setParts(res))

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

  const myrandom = () => {
    return Math.floor(Math.random() * 10000);
  };
  return (
    <>
      <YourBike key={myrandom()} list={listOfPart} bikes={userBike} />
      <div className="titleCards mt-5 text-center">
        <FormattedMessage id="myBikesFavouriteView"></FormattedMessage>
      </div>
      <h1 className="BikeTerrainTitle">MTB Bikes</h1>
      <div className="wrapperBikesCards">
        {bikeMtb.length
          ? bikeMtb.map((element) => {
            return (
              <BikesCards
                key={myrandom()}
                image={element.image}
                title={element.title}
                description={element.description}
                link={element.link}
              />
            );
          })
          : null}
      </div>
      <h1 className="BikeTerrainTitle">Urban Bikes</h1>
      <div className="wrapperBikesCards">
      <div className="mtbBikeTitle">
        </div>
        {bikeUrban.length
          ? bikeUrban.map((element) => {
            return (
              <BikesCards
                key={myrandom()}
                image={element.image}
                title={element.title}
                description={element.description}
                link={element.link}
              />
            );
          })
          : null}
      </div>
      <h1 className="BikeTerrainTitle">Road Bikes</h1>
      <div className="wrapperBikesCards">
      <div className="mtbBikeTitle">  
        </div>
        {bikeRoad.length
          ? bikeRoad.map((element) => {
            return (
              <BikesCards
                key={myrandom()}
                image={element.image}
                title={element.title}
                description={element.description}
                link={element.link}
              />
            );
          })
          : null}
      </div>
      <div className="titleCards mt-5 text-center">
        <FormattedMessage id="myPartsFavouriteView"></FormattedMessage>
      </div>
      <div className="wrapperBikesCards">
        {parts.length
          ? parts.map((element) => {
            return (
              <PartsCards
                key={myrandom()}
                image={element.image}
                title={element.title}
                description={element.description}
                link={element.link}
              />
            );
          })
          : null}
      </div>
    </>
  );
};

export default CustomizeBike;

