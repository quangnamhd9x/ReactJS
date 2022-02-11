import "./App.css";
import Card2 from "./components/card/Card";
import CardList from "./components/card/CardList";
import "./components/youtube/yt-style.css";
import { GlobalStyles } from "./GlobalStyles";

function App() {
  return (
    <div>
      <GlobalStyles></GlobalStyles>
      <CardList>
        <Card2 secondary={true}></Card2>
      </CardList>
    </div>
  );
}

export default App;
