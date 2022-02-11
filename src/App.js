// import { ThemeProvider } from "styled-components";
import "./App.css";
// import Card2 from "./components/card/Card2";
import CardList from "./components/card/CardList";
import CardTailwind from "./components/card/CardTailwind";
// import { GlobalStyles } from "./GlobalStyles";

// const theme = {
//   colors: {
//     blue: "#2979ff",
//   },
//   orange: "#ffa400",
// };

function App() {
  return (
    <div>
      {/* <ThemeProvider theme={theme}>
      </ThemeProvider> */}

      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      {/* <GlobalStyles></GlobalStyles> */}
      <CardList>
        <CardTailwind></CardTailwind>
      </CardList>
    </div>
  );
}

export default App;
