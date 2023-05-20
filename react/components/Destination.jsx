import React, { useState, useEffect } from "react";
import Moon from "../assets/images/image-moon.png";
import Europa from "../assets/images/image-europa.png";
import Titan from "../assets/images/image-titan.png";
import Mars from "../assets/images/image-mars.png";
import data from "./data";

function Destination() {
  const [planetNumber, setPlanetNumber] = useState(0);
  useEffect(() => {}, [planetNumber]);

  const navigation = React.useRef();

  const tabChange = (e) => {
    setPlanetNumber(e.target.dataset.index);
    const tabs = Array.from(navigation.current.children);

    tabs.forEach((tab) => {
      tab.classList.remove("activate");
    });

    e.target.classList.add("activate");
  };

  const planetImages = {
    Moon: Moon,
    Europa: Europa,
    Titan: Titan,
    Mars: Mars,
  };

  return (
    <div className="destination">
      <div className="destination-content">
        <h1 className="destination-content-subtitle">
          <span>{planetNumber}</span> Pick your destination
        </h1>

        <div className="destination-content-image">
          <img
            src={planetImages[data.destinations[planetNumber].name]}
            alt="planets"
          />
        </div>
        <div ref={navigation} className="destination-content-navigation">
          <div data-index={0} className="tab activate" onClick={tabChange}>
            Moon
          </div>
          <div data-index={1} className="tab" onClick={tabChange}>
            Mars
          </div>
          <div data-index={2} className="tab" onClick={tabChange}>
            Europa
          </div>
          <div data-index={3} className="tab" onClick={tabChange}>
            Titan
          </div>
        </div>
        <h1 className="destination-content-title">
          {data.destinations[planetNumber].name}
        </h1>
        <p className="destination-content-body">
          {data.destinations[planetNumber].description}
        </p>
        <div className="destination-content-info">
          <div className="distance">
            <p className="avg-distance">Average distance</p>
            <h1 className="h1">{data.destinations[planetNumber].distance}</h1>
          </div>
          <div className="time">
            <p className="avg-distance">Estimated Travel Time</p>
            <h1 className="h1">{data.destinations[planetNumber].travel}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
