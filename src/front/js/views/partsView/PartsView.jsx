import React, { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import "./partsView.css"
import PartsCards from "../../component/PartsCards/partsCards.jsx";
import fetchGetPartByTypeTerrainAndSize from "../../utils/fetchGetPartByTypeTerrainAndSize.js";
import BackToTopButton from "../../component/BackToTopButton.jsx";
import { Link } from "react-router-dom";



const PartsView = () => {

    const [parts, setParts] = useState({});

    const [listOfPart, setListOfPart] = useState([]);
    const [userBike, setUserBike] = useState([]);
    const [road, setRoad] = useState({});
    const [urban, setUrban] = useState({});
    const [mtb, setMtb] = useState({});
    //   const [handlebar, setHandlebar] = useState({});
    //   const [frame, setFrame] = useState({});
    //   const [wheel, setWheel] = useState({});

    useEffect(() => {

        fetchGetPartByTypeTerrainAndSize("road", "s")
            .then((res) => setRoad(res))
        fetchGetPartByTypeTerrainAndSize("urban", "m")
            .then((res) => setUrban(res))
        fetchGetPartByTypeTerrainAndSize("mtb", "m")
            .then((res) => setMtb(res))


    }, []);

    const myrandom = () => {
        return Math.floor(Math.random() * 10000);
    };



    return (
        <>
        <BackToTopButton />
            <div className="titleCards mt-5 text-center">
               
                
                <FormattedMessage id="myPartsFavouriteView"></FormattedMessage>
           
            </div>
            <Link to="/customizeBike">
                <button className="backToBikes"><FormattedMessage id="GoBackToBikes"></FormattedMessage></button>
                </Link>

            <div className="partsTotal">
                <div class="row">
                    <div class="col-4">
                        <div id="list-example" class="list-group">
                            <a class="list-group-item list-group-item-action partsMainMenu" href="#list-item-1"><h1 className="partTerrainTitle">ROAD</h1></a>
                            <a class="list-group-item list-group-item-action partsMainMenu" href="#list-item-2"><h1 className="partTerrainTitle">URBAN</h1></a>
                            <a class="list-group-item list-group-item-action partsMainMenu" href="#list-item-3"><h1 className="partTerrainTitle">MTB</h1></a>
                        </div>
                    </div>
                    <div class="col-8">
                        <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
                            <h4 id="list-item-1">
                                <a class="list-group-item list-group-item-action" href="#list-item-1"><h1 className="BikeTerrainMainTitle">     <FormattedMessage id="RoadBikes"></FormattedMessage></h1></a><div className="wrapperBikesCards">
                                    {road.length
                                        ? road.map((element) => {
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
                            </h4>


                            <h4 id="list-item-2">
                                <a class="list-group-item list-group-item-action" href="#list-item-1"><h1 className="BikeTerrainMainTitle">     <FormattedMessage id="UrbanBikes"></FormattedMessage></h1></a><div className="wrapperBikesCards">
                                    {urban.length
                                        ? urban.map((element) => {
                                            return (
                                                <>
                                                <BackToTopButton />
                                                <PartsCards
                                                    key={myrandom()}
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
                                <a class="list-group-item list-group-item-action" href="#list-item-3"><h1 className="BikeTerrainMainTitle">     <FormattedMessage id="MtbBikes"></FormattedMessage></h1></a><div className="wrapperBikesCards">
                                    {mtb.length
                                        ? mtb.map((element) => {
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
                            </h4>


                        </div>
                    </div>
                </div>

            </div>
        </>
    )
};

export default PartsView;