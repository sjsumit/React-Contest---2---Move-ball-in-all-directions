import React, { Component, useEffect, useState } from "react";
//import "./styles.css";

import "../styles/App.css";
// import React, { Component, useEffect, useState } from "react";

const App = () => {
   const [renderBall, setRenderBall] = useState(false);
   const [ballPosition, setBallPosition] = useState({
      left: "0px",
      top: "0px"
   });
   const reset = () => {
      setRenderBall(false);
      setBallPosition({
         left: "0px",
         top: "0px"
      });
   };

   //{key:ArrowRight, keyCode:39} or
   //{key:ArrowDown, keyCode:40} or
   //{key:ArrowUp, keyCode:38},
   //{key:ArrowLeft, keyCode:37}.

   const buttonClickHandler = () => {
      setRenderBall(true);
   };
   const renderChoice = () => {
      if (renderBall) {
         return <div className="ball" style={ballPosition}></div>;
      } else
         return (
            <button className="start" onClick={buttonClickHandler}>
               Click For One Ball
            </button>
         );
   };

   const onKeyPressed = (e) => {
      if (renderBall === false) return;
      if (e.keyCode === 39) {
         setBallPosition({
            left: +ballPosition.left.split("px")[0] + 5 + "px",
            top: ballPosition.top
         });
      }
      if (e.keyCode === 40) {
         setBallPosition({
            left: ballPosition.left,
            top: +ballPosition.top.split("px")[0] + 5 + "px"
         });
      }
      if (e.keyCode === 38) {
         setBallPosition({
            left: ballPosition.left,
            top: +ballPosition.top.split("px")[0] - 5 + "px"
         });
      }
      if (e.keyCode === 37) {
         setBallPosition({
            left: +ballPosition.left.split("px")[0] - 5 + "px",
            top: ballPosition.top
         });
      }
   };

   useEffect(() => {
      document.addEventListener("keydown", onKeyPressed);
      return () => {
         document.removeEventListener("keydown", onKeyPressed);
      };
   });

   return (
      <div className="playground">
         {renderChoice()}
         <button onClick={reset} className="reset">
            Reset
         </button>
      </div>
   );
};

export default App;
