import React from "react";
import { FormattedMessage } from "react-intl";

import YourPersonalParts from "./YourPersonalParts.jsx";
import useParts from "../../utils/useParts.jsx";
import YourPersonalBike from "./YourPersonalBike.jsx";
import useBikes from "../../utils/useBikes.jsx";
import "./YourBike.css";
import { Tabs, Tab } from "react-bootstrap";
import './Tabs.css'

const YourBike = ({ list, bikes }) => {
  const {
    targetWheels,
    targetFrame,
    targetFork,
    targetHandlebar,
    targetSaddle,
    handleBack,
    handleNext,
  } = useParts(list);
  const {
    targetMtb,
    targetUrban,
    targetRoad,
    handleNextB,
    handleBackB,
    targetBikes,
  } = useBikes(bikes);

  return (
    <>
      <div className="container your-bike">
        <div className="row justify-content-center">
          <div className="titleCards mt-3 mb-2">
            <h1>
              <FormattedMessage id="YourBike" defaultMessage="Your bike" />
            </h1>
          </div>
        </div>
        <Tabs
          defaultActiveKey="yourBike"
          id="uncontrolled-tab-example"
          className="titleTabs"
        >
          <Tab eventKey="yourBike" title="Your Bike">
            <YourPersonalBike
              key={targetBikes?.id}
              id={targetBikes?.id}
              image={targetBikes?.image}
              link={targetBikes?.link}
              title={targetBikes?.title}
              next={handleNextB}
              back={handleBackB}
              bike={bikes}
            />
          </Tab>
          <Tab eventKey="yourParts" title="Your Parts">
            <div className="row">
              <YourPersonalParts
                key={targetHandlebar?.id}
                id={targetHandlebar?.id}
                image={targetHandlebar?.image}
                link={targetHandlebar?.link}
                title={targetHandlebar?.title}
                part="handlebar"
                next={handleNext}
                back={handleBack}
              />
              <YourPersonalParts
                key={targetFork?.id}
                id={targetFork?.id}
                image={targetFork?.image}
                link={targetFork?.link}
                title={targetFork?.title}
                part="fork"
                next={handleNext}
                back={handleBack}
              />
              <YourPersonalParts
                key={targetFrame?.id}
                id={targetFrame?.id}
                image={targetFrame?.image}
                link={targetFrame?.link}
                title={targetFrame?.title}
                part="frame"
                next={handleNext}
                back={handleBack}
              />
            </div>
            <div className="row">
              <YourPersonalParts
                key={targetSaddle?.id}
                id={targetSaddle?.id}
                image={targetSaddle?.image}
                link={targetSaddle?.link}
                title={targetSaddle?.title}
                part="saddle"
                next={handleNext}
                back={handleBack}
              />
              <YourPersonalParts
                key={targetWheels?.id}
                id={targetWheels?.id}
                image={targetWheels?.image}
                link={targetWheels?.link}
                title={targetWheels?.title}
                part="wheels"
                next={handleNext}
                back={handleBack}
              />
            </div>
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default YourBike;
