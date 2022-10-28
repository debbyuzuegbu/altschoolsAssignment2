import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { UsersPage } from './Pages/User';
import Home from "./Pages/Home";
import Error from './Pages/404';
import Header from './Components/Header';
import AboutUs from './Pages/AboutUs';

function App() {
  return (
    <div>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="user" element={<UsersPage />}></Route>
        <Route path="aboutus" element={<AboutUs />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </main>
  </div>
  );
}

export default App;
