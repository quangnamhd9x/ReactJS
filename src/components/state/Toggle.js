import React, { useState } from "react";
import "./ToggleStyles.css";

function Toggle() {
  const [on, setOn] = useState(false);
  console.log(on);
  const handleToggle = () => {
      // setOn(CallBack) -> setOn(prevState => !prevState)
      setOn((on) => !on)
    // =
    //   setOn((on) => {
    //       console.log(on);
    //       return !on;
    //   });
  }
  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
      {/* <div className="toggle-control">
        <div className="toggle-on" onClick={() => setOn(true)}>
          ON
        </div>
        <div className="toogle-off" onClick={() => setOn(false)}>
          OFF
        </div>
      </div> */}
    </div>
  );
}

export default Toggle;
