import "./App.css";
import CardList from "./components/card/CardList";
import CardTailwind from "./components/card/CardTailwind";

function App() {
  return (
    <div>
      <CardList>
        <CardTailwind primary={true} fontSize="text-2xl"></CardTailwind>
      </CardList>
    </div>
  );
}

export default App;
