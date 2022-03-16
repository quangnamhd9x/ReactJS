import React from "react";

const YoutubeItem = (props) => {
  return (
    <div>
      <p className="para">{props.number}</p>
      <div className={`youtube-item ${props.className}`}>
        <div className="youtube-image">
          <img src={props.image || "not found image"} alt="" />
        </div>
        <div className="youtube-footer">
          <img
            src={props.avatar || "not found avatar"}
            alt=""
            className="youtube-avatar"
          />
          <div className="youtube-info">
            <h3 className="youtube-title">
              {props.title || "not found title"}
            </h3>
            <h4 className="youtube-author">
              {props.author || "not found author"}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeItem;
