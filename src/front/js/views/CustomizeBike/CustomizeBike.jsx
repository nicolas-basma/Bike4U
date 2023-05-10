
import React, { useState, useEffect } from "react";

import useStore from "../../store/AppContext.jsx";
import { FormattedMessage } from "react-intl";
import fetchGetBikes from "../../utils/fetchGetBikes.js";


import { useParams } from "react-router-dom"; import { Link } from "react-router-dom";




import BikesCards from "../../component/BikesCards/bikesCards.jsx";
import PartsCards from "../../component/PartsCards/partsCards.jsx";
import "./CustomizeBike.css"


// image, title, description, link

const CustomizeBike = () => {
    const { store } = useStore();
    const params = useParams()
    const [bike, setBike] = useState({});
    

    useEffect(() => {
        fetchGetBikes("mtb", setBike)
    }, [])
   

    

    const myrandom = () => {
        return (
            Math.floor(Math.random() * 10000)
        )
    }
    return (

        <>

            <div className="titleCards mt-5 text-center">
                <FormattedMessage id="myBikesFavouriteView"></FormattedMessage>
            </div>
            <div className="wrapperBikesCards">
                {bike.length ? bike.map((element) => {
                    return <BikesCards key={myrandom()} image={element.image}
                        title={element.title} description={element.description} link={element.link} />
                }) : null}
            </div>
            <div className="titleCards mt-5 text-center">
                <FormattedMessage id="myPartsFavouriteView"></FormattedMessage>
            </div>
            <PartsCards />
            
        </>


    )
};

export default CustomizeBike;
