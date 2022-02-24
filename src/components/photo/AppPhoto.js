import React from "react";
import "./modal-image.css";

import ModalImage from "./modal-image";
import img8 from "./1.jpg";
import img9 from "./2.jpg";

const AppPhoto = () => {
  return (
    <div className="App">
      <div
        style={{
          display: `flex`,
        }}
      >
        <ModalImage
          src={img8}
          alt={`This is one of beautiful girls`}
          ratio={`3:2`}
        />
        <ModalImage
          src={img9}
          alt={`This is also one of beautiful girls`}
          ratio={`3:2`}
        />
      </div>
    </div>
  );
};

export default AppPhoto;
