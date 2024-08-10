import Draggable from "react-draggable";
export default function Merging({ boxIndices }) {
  function handleDrag(e, data) {
    console.log(data);
  }
  return (
    <div className="grid grid-cols-4 gap-4 p-4 mt-6">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className="border-8 border-blue-300 border-solid h-20 rounded-3xl relative"
        >
          {boxIndices.includes(index) && (
            <Draggable position={{ x: -30, y: -30, z: 0 }} onDrag={handleDrag}>
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "60px",
                  height: "60px",
                  backgroundColor: "red",
                  borderRadius: "50%",
                }}
              ></div>
            </Draggable>
          )}
        </div>
      ))}
    </div>
  );
}
