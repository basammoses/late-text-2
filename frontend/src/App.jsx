import "./App.css";
import Auth from "./components/Authentication/Auth"

import { Route, Routes } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";
import React from "react";

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path="/" element={<Auth />} />
        <Route path="/chats" element={<Chatpage />} />
      </Routes>
    </div>
  );
}

export default App;
