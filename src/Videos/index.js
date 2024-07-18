import React, { useRef } from "react";
import VideoJS from "./VideoJS";
import videojs from "video.js";
import vini from "../videodata/Download (1).mp4";
export const VideoGlobal = () => {
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
  return <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />;
};
