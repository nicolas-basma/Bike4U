import React, {useState} from "react";
import "./YourParts.css";
import { addFavoriteBike, deleteFavoriteBike } from "../../utils/fetchFavorites.js";
import useStore from "../../store/AppContext.jsx";



const YourPersonalBike = ({image, link, title, next, back, id}) => {

    const {store, action} = useStore();
    const {userInfo, favorite} = store;
    const {setFavorite} = action;


    const handleFavoriteBike = async (id) => {
        addFavoriteBike(userInfo.id, id);
        setFavorite(true);
        if (favorite) {
            deleteFavoriteBike(userInfo.id, id);
            setFavorite(false);
        }
    }


    return (
        <>
        <div className="col" id={id}>
        <div className="img-part">
            <img src={image} aria-label={title} className="part-img"  />
        </div>
        <div className="btns">
            <button className="customizeBikeBtn2" onClick={back}>Previus</button>
            <a href={link} target="_blank" rel="noopener noreferrer"><button className="customizeBikeBtn2">Learn More</button></a>
            <button className="customizeBikeBtn2"onClick={next}>Next</button>
            <button className="customizeBikeBtn2" onClick={()=> handleFavoriteBike(id)}>Like</button>
        </div>
        </div>
        </>

    );
}

export default YourPersonalBike;