import React from "react";
import { useEffect, useRef, useState } from "react/cjs/react.development";

const TextareaAutoresize = () => {
  const [text, setText] = useState("demo");
  const textareaRef = useRef(null);
  const [textareaHeight, setTextareaHeight] = useState("auto");
  const handleChange = (event) => {
    setTextareaHeight("auto");
    setText(event.target.value);
  };
  useEffect(() => {
    setTextareaHeight(`${textareaRef?.current?.scrollHeight}px`);
  }, [text]);
  return (
    <div className="p-5">
      <textarea
        className="transition-all overflow-hidden w-full max-w-[400px] p-5 rounded-lg border border-gray-500 resize-none"
        placeholder="Please enter your content..."
        value={text}
        ref={textareaRef}
        style={{
          height: textareaHeight,
        }}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default TextareaAutoresize;
