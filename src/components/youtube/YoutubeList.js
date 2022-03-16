import React, { useState } from "react";
import { YoutubeData } from "./YoutubeData";
import { YoutubeDataCategory } from "./YoutubeDataCategory";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = (props) => {
  const [IdFilter, setIdFilter] = useState(false);
  const [categoryName, setCategoryName] = useState("Toàn bộ");

  const getIdFilter = (id, name) => {
    setIdFilter((IdFilter) => id);
    setCategoryName((categoryName) => name);
  };

  return (
    <div className="youtube-main">
      <div className="youtube-side-bar">
        <div>
          <img src="src/components/youtube/img/NAM.png" alt="" />
          <hr />
          <ul className="ml-5 mt-2">
            <li onClick={(itemId) => getIdFilter(false, "Toàn bộ")}>
              <button>Toàn bộ</button>
            </li>
            {YoutubeDataCategory.map((item) => {
              return (
                <li>
                  <button
                    onClick={(itemId) =>
                      getIdFilter(
                        item.id ? item.id : "",
                        item.category ? item.category : "Không thấy danh mục"
                      )
                    }
                  >
                    {item.category}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="block-right">
        <h1 className="text-lg p-5">Danh mục: {categoryName}</h1>
        <div className="youtube-list">
          {IdFilter !== false
            ? YoutubeData.filter((video) => video.category_id === IdFilter).map(
                (item, index) => {
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
    </div>
  );
};

export default YoutubeList;
