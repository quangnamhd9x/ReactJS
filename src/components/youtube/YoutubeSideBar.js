import React from "react";
import { YoutubeDataCategory } from "./YoutubeDataCategory";

const YoutubeSideBar = (props) => {
  const getIdCategory = (itemId) => {
    console.log(itemId);
    return itemId;
  };

  return (
    <div className="youtube-side-bar">
      <div className="fixed">
        <h1 className="text-lg p-5">Danh mục</h1>
        <hr />
        <ul className="ml-5">
          {YoutubeDataCategory.map((item, index) => {
            return (
              <li>
                <a onClick={(itemId) => getIdCategory(item.id)}>
                  {item.category}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default YoutubeSideBar;
