import React from "react";
import { useState } from "react";
import "../Merging.css"; // Assuming you have a CSS file for styling

export default function Merging({ boxes, setBoxes }) {
  const [draggedBox, setDraggedBox] = useState(null);

  const handleDragStart = (index) => {
    setDraggedBox(index);
  };

  const handleDrop = (index) => {
    if (draggedBox !== null) {
      const draggedBoxData = boxes.find((box) => box.index === draggedBox);
      const targetBoxData = boxes.find((box) => box.index === index);

      if (targetBoxData && targetBoxData.level === draggedBoxData.level) {
        // Merge the boxes
        const newBoxes = boxes
          .filter((box) => box.index !== draggedBox) // Remove dragged box
          .map((box) =>
            box.index === index ? { ...box, level: box.level + 1 } : box
          );
        setBoxes(newBoxes);
      } else if (!targetBoxData) {
        // Move the box to an empty square
        const newBoxes = boxes.map((box) =>
          box.index === draggedBox ? { ...box, index } : box
        );
        setBoxes(newBoxes);
      }
    }

    setDraggedBox(null); // Reset the dragged box
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Allow the drop event
  };

  const renderSquare = (index) => {
    const box = boxes.find((box) => box.index === index);

    return (
      <div
        key={index}
        className="square"
        onDragOver={handleDragOver}
        onDrop={() => handleDrop(index)}
      >
        {box && (
          <div
            className={`box level-${box.level}`}
            draggable
            onDragStart={() => handleDragStart(index)}
          >
            {box.level}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="grid">
      {Array.from({ length: 12 }).map((_, index) => renderSquare(index))}
    </div>
  );
}
