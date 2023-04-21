import React, { useState } from "react";
import moon from "../assets/destination/image-moon.png";
import titan from "../assets/destination/image-titan.png";
import mars from "../assets/destination/image-mars.png";
import europa from "../assets/destination/image-europa.png";
import data from "../data";

function Destination() {
  console.log(data);
  const [planetNumber, setPlanetNumber] = useState(0);

  const planetImages = {
    moon,
    mars,
    europa,
    titan,
  };

  const tabChange = (e) => {
    console.log(e);

    if(e.target.dataset.index){
      setPlanetNumber(e.target.dataset.index)
    
      e.target.classList.add("activate")
    
    }

  };

  return (
    <div className="destination">
      <div className="destination-content">
        <h1 className="destination-content-subtitle">
          <span>00</span> Pick your destination
        </h1>

        <div className="destination-content-image">
          <img src={planetImages.moon} alt="planets" />
        </div>
        <div className="destination-content-navigation">
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
            <p>Average distance</p>
            <h1>{data.destinations[planetNumber].distance}</h1>
          </div>
          <div className="time">
            <p>Estimated Travel Time</p>
            <h1>{data.destinations[planetNumber].travel}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
