import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

import "./App.css";
import Clicker from "./components/Clicker";
import Heading from "./components/Heading";
import Merging from "./components/Merging";
import Task from "./components/Task";
import Connect from "./components/ImageLabeler";

export default function App() {
  const [clickCount, setClickCount] = useState(24);
  const [boxes, setBoxes] = useState([]);
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setClickCount((value) => {
      if (value === 29) {
        setBoxes((prevBoxes) => {
          const nextIndex = prevBoxes.length % 12;
          return [...prevBoxes, { level: 1, index: nextIndex }];
        });
        return 24;
      } else {
        return value + 1;
      }
    });
  };

  return (
    <div className="content">
      <Clicker clickCount={clickCount} handleClick={handleClick} />
      <Merging boxes={boxes} setBoxes={setBoxes} />
    </div>
  );
}
