import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Home from "./components/Home";
import { useSelector } from "react-redux";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default App;
