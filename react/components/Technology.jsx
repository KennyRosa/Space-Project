import React, { useState } from "react";
import data from "./data";

function Technology() {
  const [technologyNumber, setTechnologyNumber] = useState(1);

  console.log(data.technology, "technology array");

  const tabChange = (e) => {
    setTechnologyNumber(e.target.dataset.index);
  };

  return (
    <div className="technology-section">
      <div className="crew-subtitle">
        <span>{technologyNumber}</span> Space Launch
      </div>

      {
        <>
          <div className="technology-image">
            <img
              src={data.technology[technologyNumber].images.landscape}
              alt=""
            />
          </div>
          <div className="technology-navigation">
            <div
              data-index={0}
              onClick={tabChange}
              className="technology-tab active"
            >
              1
            </div>
            <div data-index={1} onClick={tabChange} className="technology-tab">
              2
            </div>
            <div data-index={2} onClick={tabChange} className="technology-tab">
              3
            </div>
          </div>
          <div className="technology-content">
            <div className="technology-content-subtitle">The technology...</div>
            <div className="technology-content-name">
              {data.technology[technologyNumber].name}
            </div>
            <div className="technology-content-body">
              {data.technology[technologyNumber].description}
            </div>
          </div>
        </>
      }
    </div>
  );
}

export default Technology;
