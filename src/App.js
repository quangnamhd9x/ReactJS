import "./App.css";
import { YoutubeData } from "./YoutubeData";
console.log(YoutubeData);

function App() {
  return (
    <div className="youtube-list">
      {YoutubeData.map((item, index) => {
        
        return (
        <YoutubeItem
          key={item.id}
          image={item.image}
          avatar={item.avatar || item.avatar}
          title={item.title}
          author={item.author}
          className={index === 1 ? 'abc' : '' }
        ></YoutubeItem>
      )})}
    </div>
  );
}

function YoutubeItem(props) {
  return (
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
          <h3 className="youtube-title">{props.title || "not found title"}</h3>
          <h4 className="youtube-author">
            {props.author || "not found author"}
          </h4>
        </div>
      </div>
    </div>
  );
}
export default App;
