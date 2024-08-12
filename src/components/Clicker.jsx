export default function Clicker({ clickCount, handleClick }) {
  return (
    <div className="h-1/2 flex justify-center items-center mt-8">
      <div
        className="border-8 border-red-300 border-solid px-36 py-52 rounded-3xl relative overflow-hidden"
        onClick={handleClick}
      >
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: `${(clickCount / 29) * 100}%`,
            backgroundColor: "green",
            transition: "height 0.3s ease",
          }}
        ></div>
      </div>
    </div>
  );
}
