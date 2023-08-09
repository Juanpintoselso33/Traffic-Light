import React, { useState } from "react";
import '../../styles/index.css';

function TrafficLights() {
  const [activeLight, setActiveLight] = useState(null);

  const handleLightClick = (color) => {
    console.log(`${color} light clicked`);
    setActiveLight(color);
  };

  return (
    <div className="d-flex justify-content-center vh-100">
      <div className="d-flex flex-column align-items-center">
        <div
          className="bg-dark"
          style={{ width: "30px", height: "100px" }}
        ></div>

        <div
          className="d-flex flex-column align-items-center bg-dark p-3 "
          style={{ borderRadius: "10px", width: "100px" }}
        >
          <button
            className={`btn btn-lg btn-danger mb-2 rounded-circle ${activeLight === "red" ? "glow-button" : ""}`}
            style={{ width: "60px", height: "60px" }}
            onClick={() => handleLightClick("red")}
          ></button>
          <button
            className={`btn btn-lg btn-warning mb-2 rounded-circle ${activeLight === "yellow" ? "glow-button" : ""}`}
            style={{ width: "60px", height: "60px" }}
            onClick={() => handleLightClick("yellow")}
          ></button>
          <button
            className={`btn btn-lg btn-success mb-2 rounded-circle ${activeLight === "green" ? "glow-button" : ""}`}
            style={{ width: "60px", height: "60px" }}
            onClick={() => handleLightClick("green")}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default TrafficLights;