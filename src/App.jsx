import "./App.css";
import Clicker from "./components/Clicker";
import Heading from "./components/Heading";
import Merging from "./components/Merging";
import React, { useState } from "react";

export default function App() {
  const [clickCount, setClickCount] = useState(24);
  const [boxes, setBoxes] = useState([]); // Initialize boxes as an empty array

  const handleClick = () => {
    setClickCount((value) => {
      if (value === 29) {
        setBoxes((prevBoxes) => {
          const nextIndex = prevBoxes.length % 12;
          return [...prevBoxes, { level: 1, index: nextIndex }];
        });
        return 24; // Reset the clickCount after spawning one box
      } else {
        return value + 1;
      }
    });
  };

  return (
    <div className="h-screen w-auto overflow-hidden">
      <Heading />
      <Clicker clickCount={clickCount} handleClick={handleClick} />
      <Merging boxes={boxes} setBoxes={setBoxes} />
    </div>
  );
}
