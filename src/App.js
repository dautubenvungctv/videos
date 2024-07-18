import logo from "./logo.svg";
import "./App.css";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import React from "react";
import VideoJS from "./Videos/VideoJS";
import vini from "./videodata/Download (1).mp4";
function App() {
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: vini,
        type: "video/mp4",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return (
    <div style={{ width: "82%" }}>
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
    </div>
  );
}

export default App;
