import React from "react";
import { useEffect, useRef } from "react/cjs/react.development";

const Input = () => {
  const inputRef = useRef();
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Auto focus input"
        className="inline-block p-5 border border-blue-500 focus:border-red-500"
      ></input>
    </div>
  );
};

export default Input;
