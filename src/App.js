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
import Card from "./components/card/Card";
import DoubleCount from "./components/counter/DoubleCount";
import PhotosLightBox from "./components/photo/PhotosLightBox";
import HackerNews from "./components/news/HackerNews";
import HackerNewsWithReducer from "./components/news/HackerNewsWithReducer";
import TodoApp from "./components/todo/TodoApp";
import Ref from "./components/ref/Ref";
import Timer from "./components/ref/Timer";
import Input from "./components/ref/Input";

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
          <Route path="card" element={<Card />} />
          <Route path="counter" element={<DoubleCount />} />
          <Route path="lightbox" element={<PhotosLightBox />} />
          <Route path="news" element={<HackerNews />} />
          <Route path="newsreducer" element={<HackerNewsWithReducer />} />
          <Route path="todo" element={<TodoApp />} />
          <Route path="ref" element={<Ref />} />
          <Route path="time" element={<Timer />} />
          <Route path="input" element={<Input />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
