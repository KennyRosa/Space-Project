import React, { useState, useEffect } from "react";
import data from "./data";

function Crew() {
  const [crewNumber, setCrewNumber] = useState(0);

  useEffect(() => {
    console.log(crewNumber, "Number");
  }, [crewNumber]);

  const tabChange = (e) => {
    e.target.classList.add("active");
    setCrewNumber(e.target.dataset.index);
  };

  return (
    <div className="crew-section">
      <div className="crew-subtitle">
        <span>{crewNumber}</span> Meet Your Crew
      </div>

      {
        <>
          <div className="crew-image">
            <img src={data.crew[crewNumber].images.png} alt="" />
          </div>
          <div className="crew-navigation">
            <div
              data-index={0}
              onClick={tabChange}
              className="crew-tab active"
            ></div>
            <div data-index={1} onClick={tabChange} className="crew-tab"></div>
            <div data-index={2} onClick={tabChange} className="crew-tab"></div>
            <div data-index={3} onClick={tabChange} className="crew-tab"></div>
          </div>
          <div className="crew-content">
            <div className="crew-content-role">
              {data.crew[crewNumber].role}
            </div>
            <div className="crew-content-name">
              {data.crew[crewNumber].name}
            </div>
            <div className="crew-content-body">{data.crew[crewNumber].bio}</div>
          </div>
        </>
      }
    </div>
  );
}

export default Crew;
