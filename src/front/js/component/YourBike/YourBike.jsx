import React from "react";
import YourPersonalParts from "./YourPersonalParts.jsx";
import useParts from "../../utils/useParts.jsx";
import YourPersonalBike from "./YourPersonalBike.jsx";
import useBikes from "../../utils/useBikes.jsx";
import "./YourBike.css";



const YourBike = ({list, bikes}) => {
    const {targetWheels, targetFrame, targetFork, targetHandlebar, targetPedals_chain, targetSaddle, handleBack, handleNext} = useParts(list)
    const {targetMtb, targetUrban, targetRoad, handleNextB, handleBackB, targetBikes} = useBikes(bikes)


    return (
        <>
            <div className="container your-bike">
                <div className="row justify-content-center">
                <div className="titleCards mt-3 mb-2 ">
                    <h1>Your bike</h1>
                </div>
                </div>
                <div className="row">
                <YourPersonalParts key={targetHandlebar?.id} id={targetHandlebar?.id} image={targetHandlebar?.image} link={targetHandlebar?.link} title={targetHandlebar?.title} part="handlebar" next={handleNext} back={handleBack}/>
                <YourPersonalParts key={targetFork?.id} id={targetFork?.id}  image={targetFork?.image} link={targetFork?.link} title={targetFork?.title} part="fork" next={handleNext} back={handleBack}/>
                <YourPersonalParts key={targetFrame?.id} id={targetFrame?.id}  image={targetFrame?.image} link={targetFrame?.link} title={targetFrame?.title} part="frame" next={handleNext} back={handleBack}/>
                </div>
                <div className="row">
                <YourPersonalBike key={targetBikes?.id} id={targetBikes?.id} image={targetBikes?.image} link={targetBikes?.link} title={targetBikes?.title}  next={handleNextB} back={handleBackB} bike={bikes}/> 
                </div>
                <div className="row">
                <YourPersonalParts key={targetSaddle?.id} id={targetSaddle?.id}  image={targetSaddle?.image} link={targetSaddle?.link} title={targetSaddle?.title} part="saddle" next={handleNext} back={handleBack}/>
                {/* <YourPersonalParts image={targetPedals_chain?.image} link={targetPedals_chain?.link} title={targetPedals_chain?.title} part="pedals_chain" next={handleNext} back={handleBack}/> */}
                <YourPersonalParts key={targetWheels?.id} id={targetWheels?.id}  image={targetWheels?.image} link={targetWheels?.link} title={targetWheels?.title} part="wheels" next={handleNext} back={handleBack}/>
                </div>
            </div>
        </>
    );
}

export default YourBike;