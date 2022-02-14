import React from "react";
import { YoutubeDataCategory } from "./YoutubeDataCategory";

const YoutubeSideBar = () => {
  return (
    <div className="youtube-side-bar">
      <div className="fixed">
        <h1 className="text-lg p-5">Danh mục</h1>
        <hr />
        {YoutubeDataCategory.map((item, index) => {
          return (
            <ul className="ml-5">
              <li onClick={getIdCategory}>
                <button id="button" value={item.id}>
                  {item.category}
                  {console.log(item.id)}
                </button>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

const getIdCategory = () => {
  console.log(document.getElementById("button").getAttribute("value"));
};

export default YoutubeSideBar;
