import React, {useState} from "react";
import "./YourParts.css";
import { addFavoriteBike, deleteFavoriteBike } from "../../utils/fetchFavorites.js";
import useStore from "../../store/AppContext.jsx";
import { FormattedMessage } from "react-intl";



const YourPersonalBike = ({image, link, title, next, back, id}) => {

    const {store, action} = useStore();
    const {userInfo, favorite} = store;
    const {setFavorite} = action;


    const handleFavoriteBike = async (id) => {
        if (favorite) {
            deleteFavoriteBike(userInfo.id, id);
            setFavorite(false);
        }
        addFavoriteBike(userInfo.id, id);
        setFavorite(true);
    }


    return (
        <>
        <div className="col" >
        <div className="card-part" key={id}>
            <img src={image} aria-label={title} className="bike"  />
        </div>
        <div className="btns">
            <button className="customizeBikeBtn2" onClick={()=>back(bike)}><FormattedMessage id="Before"></FormattedMessage></button>
            <a href={link} target="_blank" rel="noopener noreferrer"><button className="customizeBikeBtn2"><FormattedMessage id="LearnMore"></FormattedMessage></button></a>
            <button className="customizeBikeBtn2"onClick={()=>next(bike)}><FormattedMessage id="Next"></FormattedMessage></button>
            <button className="customizeBikeBtn2"onClick={()=>handleFavoriteBike(id)}><FormattedMessage id="favorito"></FormattedMessage></button>
        </div>
        </div>
        </>

    );
}

export default YourPersonalBike;