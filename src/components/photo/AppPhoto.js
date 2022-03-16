import React from "react";
import "./modal-image.css";

import ModalImage from "./modal-image";

const AppPhoto = () => {
  return (
    <div className="App">
      <div
        style={{
          display: `flex`,
        }}
      >
        <ModalImage
          src="img/2.jpg"
          alt={`This is one of beautiful girls`}
          ratio={`3:2`}
        />
        <ModalImage
          src="img/1.jpg"
          alt={`This is also one of beautiful girls`}
          ratio={`3:2`}
        />
      </div>
    </div>
  );
};

export default AppPhoto;
