import React from "react";
import { useEffect, useRef, useState } from "react/cjs/react.development";

const Timer = () => {
  const btn = "p-5 m-2 rounded-md bg-teal-700 text-white";
  const timeRef = useRef(null);
  const [count, setCount] = useState(0);

  const handleStart = () => {
    if (timeRef.current) return;
    timeRef.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(timeRef.current);
    timeRef.current = null;
  };

  useEffect(() => {
    clearInterval(timeRef.current);
  }, []);

  return (
    <div>
      <h3 className="text-lg p-5">Timer: {count}s</h3>
      <div>
        <button onClick={handleStart} className={btn}>Start</button>
        <button onClick={handleStop}  className={btn}>Stop</button>
      </div>
    </div>
  );
};

export default Timer;
