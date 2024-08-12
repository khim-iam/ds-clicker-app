import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Clicker from "./components/Clicker";
import Merging from "./components/Merging";
import ImageLabeler from "./components/ImageLabeler";
import Person from "./components/Task";

import sawGif from "./images/saw.gif";
import playgroundGif from "./images/Playground.gif";
import personGif from "./images/Person.gif";
export default function App() {
  const [clickCount, setClickCount] = useState(24);
  const [boxes, setBoxes] = useState([]);

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
      <div className="content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Clicker clickCount={clickCount} handleClick={handleClick} />
                <Merging boxes={boxes} setBoxes={setBoxes} />
              </>
            }
          />
          <Route path="/imagelabeler" element={<ImageLabeler />} />
          <Route path="/person" element={<Person />} />
        </Routes>
        <div className="bottom-navigation flex flex-row justify-between items-center w-80 px-4 py-2 fixed bottom-0 ">
          <Link to="/imagelabeler">
            <img src={sawGif} alt="Home" className="h-12" />
          </Link>
          <Link to="/">
            <img src={playgroundGif} alt="Task" className="h-20" />
          </Link>
          <Link to="/person">
            <img src={personGif} alt="Connect" className="h-12" />
          </Link>
        </div>
      </div>
    </Router>
  );
}
