import React from "react";
import { YoutubeData } from "./YoutubeData";
import { YoutubeDataCategory } from "./YoutubeDataCategory";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = (props) => {
  const getIdCategory = (itemId) => {
    // console.log(itemId);
    return itemId;
  };

  console.log(props);    // vịt trí item khi click vào

  if (YoutubeData[0].category_id.includes(props)) {
    console.log("Value found");
  } else {
    console.log("not found");
  }

  return (
    <div className="youtube-main">
      {props.children}
      <div className="youtube-side-bar">
        <div className="fixed">
          <h1 className="text-lg p-5">Danh mục</h1>
          <hr />
          <ul className="ml-5">
            {YoutubeDataCategory.map((item, index) => {
              return (
                <li>
                  <a onClick={(itemId) => YoutubeList(item.id ? item.id : 1)}>
                    {item.category}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="youtube-list">
        {/* {console.log(YoutubeData[0])} */}
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
    </div>
  );
};

export default YoutubeList;
