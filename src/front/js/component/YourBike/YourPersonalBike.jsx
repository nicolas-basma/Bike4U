import React, {useState} from "react";
import "./YourPersonalParts.css";
import { addFavoriteBike, deleteFavoriteBike } from "../../utils/fetchFavorites.js";
import useStore from "../../store/AppContext.jsx";
import { FormattedMessage } from "react-intl";



const YourPersonalBike = ({image, link, title, next, back, id, bike}) => {

    const {store} = useStore();
    const {userInfo, isInvited} = store;


    const handleFavoriteBike = async (id) => {
        addFavoriteBike(userInfo.id, id);
        // setFavorite(true);
    }


    return (
        <>
        <div className="col" >
        <div className="card-part" key={id + title}>
            <h6>{title}</h6>
            <img src={image} aria-label={title} className="bike"  />
        </div>
        <div className="btns">
            <button className="customizeBikeBtn2" onClick={()=>back(bike)}><FormattedMessage id="Before"></FormattedMessage></button>
            <a href={link} target="_blank" rel="noopener noreferrer"><button className="customizeBikeBtn2"><FormattedMessage id="LearnMore"></FormattedMessage></button></a>
            <button className="customizeBikeBtn2"onClick={()=>next(bike)}><FormattedMessage id="Next"></FormattedMessage></button>
            { isInvited ? null
            : <button className="customizeBikeBtn2"onClick={()=>handleFavoriteBike(id)}><FormattedMessage id="favorito"></FormattedMessage></button>}
        </div>
        </div>
        </>

    );
}

export default YourPersonalBike;