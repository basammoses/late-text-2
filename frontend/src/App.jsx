import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route, Routes } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";
import React from "react";
import Kinklist from './components/Kinklist'
import { Quizpage } from "./Pages/Quiz";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/chats" element={<Chatpage />} />
        <Route path="/quiz" element={<Quizpage />} />
      </Routes>
    </div>
  );
}

export default App;
