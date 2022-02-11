import React from "react";
import { YoutubeDataCategory } from "./YoutubeDataCategory";

class YoutubeSideBar extends React.Component {
  select = (event) => {
    // get by number user per page
    this.setState({
      usersPerPage: event.target.value,
    });
  };

  render() {
    const Data = YoutubeDataCategory.map((item, index) => {
      <div>
        <h2>Danh mục</h2>
        <select defaultValue="0" onChange={this.select}>
          <option value="0" disabled>
            Get by
          </option>
          <option value={item.id}>{item.category}</option>
        </select>
      </div>;
    });
    return (
      <div>
        <div>{Data}</div>
      </div>
    );
  }
}

export default YoutubeSideBar;
