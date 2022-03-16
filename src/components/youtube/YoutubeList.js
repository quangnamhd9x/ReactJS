import React, { useState } from "react";
import { YoutubeData } from "./YoutubeData";
import { YoutubeDataCategory } from "./YoutubeDataCategory";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = (props) => {
  const [IdFilter, setIdFilter] = useState(false);
  const [categoryName, setCategoryName] = useState("");

  const getIdFilter = (id, name) => {
    setIdFilter((IdFilter) => id);
    setCategoryName((categoryName) => name);
    console.log(IdFilter);
    console.log(categoryName);
  };

  return (
    <div className="youtube-main">
      <div className="youtube-side-bar">
        <div className="fixed">
          <h1 className="text-lg p-5">Danh mục: {categoryName}</h1>
          <hr />
          <ul className="ml-5">
            {YoutubeDataCategory.map((item) => {
              return (
                <li>
                  <button
                    onClick={(itemId) => getIdFilter(item.id ? item.id : "")}
                  >
                    {item.category}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="youtube-list">
        {IdFilter !== false
          ? YoutubeData.filter((video) => video.category_id === IdFilter).map(
              (itemvi, index) => {
                const newClass = index === 1 ? "abc" : "";
                return (
                  <YoutubeItem
                    category={itemvi.category}
                    key={itemvi.id}
                    image={itemvi.image}
                    avatar={itemvi.avatar}
                    title={itemvi.title}
                    author={itemvi.author}
                    className={newClass}
                    number={(index += 1)}
                  ></YoutubeItem>
                );
              }
            )
          : YoutubeData.map((item, index) => {
              const newClass = index === 1 ? "abc" : "";
              return (
                <YoutubeItem
                  category={item.category}
                  key={item.id}
                  image={item.image}
                  avatar={item.avatar}
                  title={item.title}
                  author={item.author}
                  className={newClass}
                  number={(index += 1)}
                ></YoutubeItem>
              );
            })}
        {}
      </div>
    </div>
  );
};

export default YoutubeList;
