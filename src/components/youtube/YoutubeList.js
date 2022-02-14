import React from "react";
import { YoutubeData } from "./YoutubeData";
import YoutubeItem from "./YoutubeItem";
import YoutubeSideBar from "./YoutubeSideBar";

const YoutubeList = (props) => {
  <YoutubeSideBar da></YoutubeSideBar>

  return (
    <div className="youtube-list">
      {props.children}
      {YoutubeData.map((item, index) => {
        const newClass = index === 1 ? "abc" : "";
        return (
          <YoutubeItem
            category={item.category}
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
