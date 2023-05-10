import React from "react";

import { FormattedMessage } from "react-intl";

const PartsCards = () => {
    return (
        <>
        <div className="titleCards mt-5 text-center">
         <FormattedMessage id="myPartsFavouriteView"></FormattedMessage>
        </div>
            <div class="card mt-3 ms-5" style={{ width: "18rem" }}>
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Parte X</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Saber más</a>
                </div>
            </div>
        </>
    )
};

export default PartsCards;