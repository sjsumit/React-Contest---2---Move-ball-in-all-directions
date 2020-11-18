import React, { Component, useState, useEffect } from "react";
import "../styles.App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px"
  });
  const reset = () => {
    setX(0);
    setY(0);
    setBallPosition({ left: "0px", top: "0px" });
    setRenderBall(false);
  };
  const buttonClickHandler = () => {
    setRenderBall(true);
  };
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.keyCode === 39) {
        setX(x + 5);
        setBallPosition({ left: `${x + 5}px`, top: `${y}px` });
      }
      if (event.keyCode === 37) {
        setX(x - 5);
        setBallPosition({ left: `${x - 5}px`, top: `${y}px` });
      }
      if (event.keyCode === 38) {
        setY(y - 5);
        setBallPosition({ left: `${x}px`, top: `${y - 5}px` });
      }
      if (event.keyCode === 40) {
        setY(y + 5);
        setBallPosition({ left: `${x}px`, top: `${y + 5}px` });
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [x, y]);

  const renderChoice = () => {
    if (renderBall) {
      return <div className="ball" style={ballPosition}></div>;
    } else
      return (
        <button onClick={buttonClickHandler} className="start">
          Start
        </button>
      );
  };

  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
