import React from "react";
import YourParts from "./YourParts.jsx";
import useParts from "../../utils/useParts.jsx";
import YourPersonalBike from "./YourPersonalBike.jsx";
import useBikes from "../../utils/useBikes.jsx";
import "./YourBike.css";



const YourBike = ({list, bikes}) => {
    const {targetWheels, targetFrame, targetFork, targetHandlebar, targetPedals_chain, targetSaddle, handleBack, handleNext} = useParts(list)
    const {targetBikes, handleNextB, handleBackB} = useBikes(bikes)



    return (
        <>
            <div className="container your-bike">
                <div className="titleCards mt-3 mb-2 text-center">
                <h1>Your bike</h1>
      </div>
                <div className="row">
                <YourParts id={targetHandlebar?.id} image={targetHandlebar?.image} link={targetHandlebar?.link} title={targetHandlebar?.title} part="handlebar" next={handleNext} back={handleBack}/>
                <YourParts id={targetFork?.id}  image={targetFork?.image} link={targetFork?.link} title={targetFork?.title} part="fork" next={handleNext} back={handleBack}/>
                <YourParts id={targetFrame?.id}  image={targetFrame?.image} link={targetFrame?.link} title={targetFrame?.title} part="frame" next={handleNext} back={handleBack}/>
                </div>
                <div className="row">
                <YourPersonalBike id={targetBikes?.id} image={targetBikes?.image} link={targetBikes?.link} title={targetBikes?.title}  next={handleNextB} back={handleBackB}/> 
                </div>
                <div className="row">
                <YourParts id={targetSaddle?.id}  image={targetSaddle?.image} link={targetSaddle?.link} title={targetSaddle?.title} part="saddle" next={handleNext} back={handleBack}/>
                {/* <YourParts image={targetPedals_chain?.image} link={targetPedals_chain?.link} title={targetPedals_chain?.title} part="pedals_chain" next={handleNext} back={handleBack}/> */}
                <YourParts id={targetWheels?.id}  image={targetWheels?.image} link={targetWheels?.link} title={targetWheels?.title} part="wheels" next={handleNext} back={handleBack}/>
                </div>
            </div>
        </>
    );
}

export default YourBike;