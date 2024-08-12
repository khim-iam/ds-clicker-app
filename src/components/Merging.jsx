import React from "react";

const alienImages = [
  "src/images/aliens/alien-1.png",
  "src/images/aliens/alien-2.png",
  "src/images/aliens/alien-3.png",
  "src/images/aliens/alien-4.png",
  // Add more paths as necessary
];

export default function Merging({ boxes, setBoxes }) {
  // Create an array of 12 placeholders
  const placeholders = Array.from({ length: 12 });

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("text/plain", index);
  };

  const handleDrop = (e, dropIndex) => {
    const dragIndex = e.dataTransfer.getData("text/plain");
    const draggedBox = boxes.find((b) => b.index === parseInt(dragIndex));
    const droppedBox = boxes.find((b) => b.index === dropIndex);

    if (draggedBox && droppedBox && draggedBox.level === droppedBox.level) {
      // Perform merging
      const newLevel = draggedBox.level + 1;
      setBoxes((prevBoxes) =>
        prevBoxes
          .filter(
            (b) => b.index !== parseInt(dragIndex) && b.index !== dropIndex
          )
          .concat({ level: newLevel, index: dropIndex })
      );
    }

    e.preventDefault();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="grid"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "10px",
        padding: "10px",
        justifyContent: "center",
        marginBottom: "100px", // Increased to provide more space above the navbar
      }}
    >
      {placeholders.map((_, index) => {
        const box = boxes.find((b) => b.index === index);
        return (
          <div
            key={index}
            className="alien-box"
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "transparent", // Make it transparent so the container image is visible
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              position: "relative", // Allow overlaying of the alien image
              overflow: "hidden",
            }}
            draggable={box ? true : false}
            onDragStart={(e) => handleDragStart(e, index)}
            onDrop={(e) => handleDrop(e, index)}
            onDragOver={handleDragOver}
          >
            {/* Container placeholder */}
            <img
              src="src/images/container.png"
              alt="Container"
              style={{
                width: "100%",
                height: "100%",
                position: "absolute", // Position it absolutely within the alien box
                top: 0,
                left: 0,
                zIndex: 1, // Ensure it's behind the alien image
                objectFit: "contain",
              }}
            />
            {/* Alien image (only render if a box is present) */}
            {box && (
              <img
                src={alienImages[box.level - 1]} // Ensure the path and index are correct
                alt={`Alien ${box.level}`}
                style={{
                  width: "80%",
                  height: "80%",
                  objectFit: "contain",
                  zIndex: 2, // Ensure the alien is on top of the container
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
