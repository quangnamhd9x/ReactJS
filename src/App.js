import { ThemeProvider } from "styled-components";
import "./App.css";
import Card2 from "./components/card/Card2";
import CardList from "./components/card/CardList";
import { GlobalStyles } from "./GlobalStyles";

const theme = {
  colors: {
    blue: "#2979ff",
  },
  orange: "#ffa400",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <GlobalStyles></GlobalStyles>
      <CardList>
        <Card2 secondary={true}></Card2>
      </CardList>
    </ThemeProvider>
  );
}

export default App;
