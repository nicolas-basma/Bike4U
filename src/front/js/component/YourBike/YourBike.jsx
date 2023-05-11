import React from "react";
import { Link } from "react-router-dom";
import YourParts from "./YourParts.jsx";
import useParts from "../../utils/useParts.jsx";



const YourBike = ({ list}) => {
    const {targetWheels, targetFrame, targetFork, targetHandlebar, targetPedals_chain, targetSaddle, handleBack, handleNext} = useParts(list)

    return (
        <>
            <div className="container">
                <div className="row">
                <YourParts image={targetHandlebar?.image} link={targetHandlebar?.link} title={targetHandlebar?.title} part="handlebar" next={handleNext} back={handleBack}/>
                <YourParts image={targetFork?.image} link={targetFork?.link} title={targetFork?.title} part="fork" next={handleNext} back={handleBack}/>
                <YourParts image={targetFrame?.image} link={targetFrame?.link} title={targetFrame?.title} part="frame" next={handleNext} back={handleBack}/>
                </div>
                <div className="row">
                <YourParts image={targetSaddle?.image} link={targetSaddle?.link} title={targetSaddle?.title} part="saddle" next={handleNext} back={handleBack}/>
                {/* <YourParts image={targetPedals_chain?.image} link={targetPedals_chain?.link} title={targetPedals_chain?.title} part="pedals_chain" next={handleNext} back={handleBack}/> */}
                <YourParts image={targetWheels?.image} link={targetWheels?.link} title={targetWheels?.title} part="wheels" next={handleNext} back={handleBack}/>
                </div>
            </div>
        </>
    );
}

export default YourBike;