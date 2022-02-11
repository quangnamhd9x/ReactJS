import React from "react";
import { YoutubeData } from "./YoutubeData";
import YoutubeItem from "./YoutubeItem";
import YoutubeSideBar from "./YoutubeSideBar";

const YoutubeList = (props) => {
  // const unique = [...new Set(YoutubeData.map((item) => item.category))];
  // const arr = [];
  // for (let i = 0; i < YoutubeData.length; i++) {
  //   for (let k = 0; k < YoutubeData.length; k++) {
  //     if (unique[i] === YoutubeData[k].category) {
  //       // console.log(YoutubeData[k]);
  //       arr.push(YoutubeData[k]);
  //     }
  //   }
  // }

  // console.log(arr);

  // return(
  //   <div className="youtube-list">
  //     {props.children}
  //     <YoutubeItem
  //       category={YoutubeData[k].category}
  //       key={YoutubeData[k].id}
  //       image={YoutubeData[k].image}
  //       avatar={YoutubeData[k].avatar || YoutubeData[i].avatar}
  //       title={YoutubeData[k].title}
  //       author={YoutubeData[k].author}
  //       number={(k += 1)}
  //     ></YoutubeItem>
  //   </div>
  // );
  // console.log(unique);

  // return (
  //   <div className="youtube-list">
  //     {props.children}
  //     {arr.map((item, index) => {
  //       const newClass = index === 1 ? "abc" : "";
  //       return (
  //         <YoutubeItem
  //           category={item.category}
  //           key={item.id}
  //           image={item.image}
  //           avatar={item.avatar || item.avatar}
  //           title={item.title}
  //           author={item.author}
  //           className={newClass}
  //           number={(index += 1)}
  //         ></YoutubeItem>
  //       );
  //     })}
  //   </div>
  // );

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
