import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./../../App.css"
const Layout = () => {
  return (
    <>
      <nav className="p-3 bg-white shadow-md rounded-lg">
        <ul className="flex justify-around">
          <li>
            <Link to="/">Trang chủ</Link>
          </li>
          <li>
            <Link to="/youtube">Youtube</Link>
          </li>
          <li>
            <Link to="/photo">Photo</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
          <li>
            <Link to="/game">Game</Link>
          </li>
          <li>
            <Link to="/toggle">Toggle</Link>
          </li>
          <li>
            <Link to="/card">Card</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/newsreducer">NewsWithReducer</Link>
          </li>
          <li>
            <Link to="/todo">Todo</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
