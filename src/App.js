import logo from "./logo.svg";
import "./App.css";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import React from "react";
import VideoJS from "./Videos/VideoJS";
import vini from "./videodata/Download (1).mp4";
import { TableVideo } from "./Table/Table";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { VideoGlobal } from "./Videos";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TableVideo />}></Route>
        <Route path="/video" element={<VideoGlobal />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
