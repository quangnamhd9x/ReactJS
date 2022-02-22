import React, { useState } from "react";

const DoubleCount = (props) => {
  const [count, setCount] = useState(0);
  const handleDoubleNumber = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };
  return (
    <div>
    {props.children}
      <button onClick={handleDoubleNumber}>Double counter is</button>
      <span className="count"> {count}</span>
    </div>
  );
};

export default DoubleCount;
