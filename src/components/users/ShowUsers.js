import React from "react";

const ShowUsers = (props) => {
  return (
    <div>
      <div className="items">
        <h2>{props.first_name}</h2>
        <p>{props.last_name}</p>
        <img src={props.avatar} alt="" />
      </div>
    </div>
  );
};

export default ShowUsers;
