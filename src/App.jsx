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
  const [clickCount, setClickCount] = useState(0);
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
    <Router>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Heading />
                <div className="content">
                  <Clicker clickCount={clickCount} handleClick={handleClick} />
                  <Merging boxes={boxes} setBoxes={setBoxes} />
                </div>
              </>
            }
          />
          <Route path="/task" element={<Task />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <BottomNavigationAction
            label="Home"
            icon={<HomeIcon />}
            component={Link}
            to="/"
          />
          <BottomNavigationAction
            label="Task"
            icon={<AssignmentIcon />}
            component={Link}
            to="/task"
          />
          <BottomNavigationAction
            label="Connect"
            icon={<ConnectWithoutContactIcon />}
            component={Link}
            to="/connect"
          />
        </BottomNavigation>
      </div>
    </Router>
  );
}
