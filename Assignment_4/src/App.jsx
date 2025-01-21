import { useState } from "react";

function ChangeColor() {
  const [color, setColor] = useState("black");

  // Function to change the color
  const handleChangeColor = () => {
    const colors = ["blue", "green", "red", "purple", "orange"];
    const randomIndex = Math.floor(Math.random() * colors.length);

    if (colors[randomIndex] === color) {
      const nextIndex = (randomIndex + 1) % colors.length;
      setColor(colors[nextIndex]);
    } else {
      setColor(colors[randomIndex]);
    }
  };

  const handleResetColor = () => {
    setColor("black");
  };

  return (
    <div
      style={{
        display: "flex",               // Make the container a flex container
        justifyContent: "center",      // Horizontally center the content
        alignItems: "center",          // Vertically center the content
        minHeight: "100vh",            // Make the container take the full height of the screen
        textAlign: "center",           // Center the text inside
        margin: "0",                   // Remove any default margin
      }}
    >
      <div>
        <h1>Color Change</h1>

        <div
          style={{
            width: "300px",
            height: "300px",
            backgroundColor: color,
            borderRadius: "20px",
            margin: "0 auto", // This is optional as flex already centers it
          }}
        ></div>

        <button
          onClick={handleChangeColor}
          style={{
            marginTop: "20px",
            marginRight: "10px",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Change Color
        </button>
        <button
          onClick={handleResetColor}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Reset Color
        </button>
      </div>
    </div>
  );
}

export default ChangeColor;
