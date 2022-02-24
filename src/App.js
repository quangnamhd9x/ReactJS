import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import "./components/youtube/yt-style.scss";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import YoutubeList from "./components/youtube/YoutubeList";
import Photos from "./components/photo/Photos";
import HomePage from "./components/home/HomePage";
import NoPage from "./components/home/NoPage";
import Layout from "./components/home/Layout";
import Users from "./components/users/Users";
import Game from "./components/tictactoe/Game";
import Toggle from "./components/toggle/Toggle";
import CardTailwind from "./components/card/CardTailwind";
import DoubleCount from "./components/counter/DoubleCount";
import AppPhoto from "./components/photo/AppPhoto";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="youtube" element={<YoutubeList />} />
          <Route path="photo" element={<Photos />} />
          <Route path="user" element={<Users />} />
          <Route path="game" element={<Game />} />
          <Route path="toggle" element={<Toggle />} />
          <Route path="card" element={<CardTailwind />} />
          <Route path="counter" element={<DoubleCount />} />
          <Route path="appphoto" element={<AppPhoto />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
