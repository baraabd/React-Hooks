import React, { useState, useEffect } from "react";
import "./App.scss";

const initXY = {
  x: null,
  y: null
};

function App() {
  const [time, setTime] = useState(Date);
  const [xy, setXY] = useState(initXY);

  useEffect(() => {
    let handle = setInterval(() => {
      setTime(Date);
    }, 1000);

    return () => {
      clearInterval(handle);
    };
  });

  const mousemoveHandle = (e) => {
    setXY({
      x: e.clientX,
      y: e.clientY
    });
  }
  

  useEffect(() => {
    window.addEventListener("mousemove", mousemoveHandle);
    return () => {
      window.removeEventListener("mousemove", mousemoveHandle);
    };
  });
  return (
    <div className="App">
      <header className="App-header">
        <h2>Use Effect Examples</h2>
        <h3>Date & Time : {time}</h3>
        <h3>{`x:${xy.x}, y:${xy.y}`}</h3>
      </header>
    </div>
  );
}

export default App;