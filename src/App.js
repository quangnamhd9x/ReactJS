import "./App.css";
import DoubleCount from "./components/counter/DoubleCount";
import Board from "./components/tictactoe/Board";
import Game from "./components/tictactoe/Game";
import Users from "./components/users/Users";
import YoutubeCategory from "./components/youtube/YoutubeCategory";
import YoutubeItem from "./components/youtube/YoutubeItem";
import YoutubeList from "./components/youtube/YoutubeList";
function App() {
  return (
    <div>
      <div>
        <DoubleCount>
        <h1>Children</h1>
          {/* Children: html, component, text, variable*/}
        </DoubleCount>
      </div>
    </div>
  );
}

export default App;
