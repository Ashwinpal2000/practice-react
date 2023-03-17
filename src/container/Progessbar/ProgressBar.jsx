import React, { useState } from "react";
import "../../App.css";
import "./Progressbar.css";
import CircleProgressBar from "./CircleProgressBar";

const ProgressBar = () => {
  const [percentage, setPercentage] = useState(35);
  return (
    <div className="App">
      <CircleProgressBar percentage={percentage} circleWidth="200" />
      <input
      
        type="range"
        min="1"
        max="100"
        step="1"
        value={percentage}
        onChange={(e) => {
          setPercentage(e.target.value);
        }}
      />
    </div>
  );
};

export default ProgressBar;
