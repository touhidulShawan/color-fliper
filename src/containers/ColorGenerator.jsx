import React, { useState, useEffect } from "react";

import "./ColorGenerator.css";

const ColorGenerator = () => {
  const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

  const [currentColor, setCurrentColor] = useState("");

  useEffect(() => {
    setCurrentColor("#ffffff");
  }, []);

  const handleClick = () => {
    let color = "#";

    for (let index = 0; index < 6; index++) {
      color += colors[generateRandomNum()];
    }

    setCurrentColor(color);
  };

  const generateRandomNum = () => Math.floor(Math.random() * colors.length);

  return (
    <div className="container" style={{ backgroundColor: `${currentColor}` }}>
      <div className="content">
        <p>Background color: {currentColor} </p>
        <button onClick={handleClick}>Get New Color</button>
      </div>
    </div>
  );
};

export default ColorGenerator;
