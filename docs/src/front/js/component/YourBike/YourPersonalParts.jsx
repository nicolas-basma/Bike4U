import React from "react";
import "./YourPersonalParts.css";
import { FormattedMessage } from "react-intl";
import { addFavoritePart } from "../../utils/fetchFavorites.js";
import useStore from "../../store/AppContext.jsx";



const YourPersonalParts = ({ image, link, title, next, back, part, id }) => {
    const { store } = useStore();
    const { userInfo, isUserLogged} = store;

    const handleFavoritePart = async (id) => {
        addFavoritePart(userInfo.id, id);
    }


    return (
        <>
            <div className="col" >
                <div className="img-part" key={id + title}>
                    <h6>{title}</h6>
                    <img src={image} aria-label={title} className="part-img" />
                    <div className="btns">
                        <button className="customizeBikeBtn2" onClick={() => back(part)}>  <FormattedMessage id="Before"></FormattedMessage></button>
                        <a href={link} target="_blank" rel="noopener noreferrer"><button className="customizeBikeBtn2">  <FormattedMessage id="LearnMore"></FormattedMessage></button></a>
                        <button className="customizeBikeBtn2" onClick={() => next(part)}>  <FormattedMessage id="Next"></FormattedMessage></button>
                        { isUserLogged ? <button className="customizeBikeBtn2" onClick={() => handleFavoritePart(id)}>  <FormattedMessage id="favorito"></FormattedMessage></button>
                        : null }
                    </div>
                </div>
            </div>
            </>

            );
}

            export default YourPersonalParts;

