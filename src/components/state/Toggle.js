import React, { useState } from "react";

function Toggle() {
  // 1. enableing state: useState(initialize value)
  // 2. initialize state: useState(false)
  // 3. reading state:
  // 4. update state:
  // const array = useState(false);
  // console.log(array);
  // console.log(array[0]);
  // console.log(array[1]);
  // const [a, b] = [1,2];
  // console.log(a, b);
  // initialize value: boolean(true, false), number (1,2,3,4), string("namhq"), undefined, null, [1,2,3,4], {title: "frontend"}
  // state changes -> re-render
  const [on, setOn] = useState(false);
  console.log(on, setOn);
  console.log(on);
  return (
    <div className="toggle" onClick={() => setOn(true)}>
      Toggle {on ? "on" : "off"}
    </div>
  );
}

export default Toggle;
