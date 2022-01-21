import React from "react";
import { YoutubeData } from "../../data";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = (props) => {
  return (
    <div className="youtube-list">
    {props.children}
      {YoutubeData.map((item, index) => {
        const newClass = index === 1 ? "abc" : "";
        return (
          <YoutubeItem
            key={item.id}
            image={item.image}
            avatar={item.avatar || item.avatar}
            title={item.title}
            author={item.author}
            className={newClass}
            number={(index += 1)}
          ></YoutubeItem>
        );
      })}
    </div>
  );
};

export default YoutubeList;
