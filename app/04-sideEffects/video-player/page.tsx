"use client";

import { useState } from "react";
import VideoPlayer from "./components/VideoPlayer";

//https://react.dev/learn/synchronizing-with-effects

export default function VideoPlayerHome() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <VideoPlayer src="/video.mp4" isPlaying={isPlaying} />
    </div>
  );
}
