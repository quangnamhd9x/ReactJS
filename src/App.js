import "./App.css";
import "./components/youtube/yt-style.scss"
import YoutubeSideBar from "./components/youtube/YoutubeSideBar";
import YoutubeList from "./components/youtube/YoutubeList";

function App() {
  return (
    <div className="youtube-main">
      <YoutubeSideBar></YoutubeSideBar>
      <YoutubeList></YoutubeList>
    </div>
  );
}

export default App;
