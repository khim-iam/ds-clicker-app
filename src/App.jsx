import "./App.css";
import Clicker from "./components/Clicker";
import Heading from "./components/Heading";
import Merging from "./components/Merging";
import React, { useState } from "react";

export default function App() {
  const [clickCount, setClickCount] = useState(24);
  const [boxIndices, setBoxIndices] = useState([]);

  const handleClick = () => {
    setClickCount((value) => {
      if (value === 29) {
        setBoxIndices((prevIndices) => {
          const nextIndex = prevIndices.length % 12;
          return [...prevIndices, nextIndex];
        });
        return 24;
      } else return value + 1;
    });
  };

  return (
    <div className="h-screen w-auto overflow-hidden">
      <Heading />
      <Clicker clickCount={clickCount} handleClick={handleClick} />
      <Merging boxIndices={boxIndices} />
    </div>
  );
}
