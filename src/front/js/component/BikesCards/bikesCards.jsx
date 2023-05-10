import React from "react";

import { FormattedMessage } from "react-intl";

import "/workspace/FinalProject/src/front/js/component/BikesCards/bikesCards.css"
const BikesCards = () => {


    return (
        <>
         <div className="titleCards mt-5 text-center">
         <FormattedMessage id="myBikesFavouriteView"></FormattedMessage>
        </div>
            <div className="card mt-3 ms-5" style={{width: "18rem"}}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Bicicleta X</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Saber más</a>
                </div>
            </div>
        </>
    )
};

export default BikesCards;