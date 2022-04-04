import React from "react";
import {
  BarLoader,
  DoubleBubble,
  SlidingPebbles,
  Spinner,
} from "react-spinner-animated";

const Loading = (props) => {
  return (
    <div style={{ display: props.loading ? "block" : "none" }}>
      <Spinner
        text="Loading..."
        bgColor={"#ffffff"}
        center={false}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default Loading;
