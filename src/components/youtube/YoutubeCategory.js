import React from "react";

const YoutubeCategory = ({ value, onClick }) => {
  return <p onClick={onClick}>{value}</p>;
};

export default YoutubeCategory;
