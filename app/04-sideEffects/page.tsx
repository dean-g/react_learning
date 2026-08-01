"use client";

import { useEffect, useState } from "react";

export default function Timer() {
  // Counter = 0
  // Every 1 second, +1 to Counter
  // Pause/Play button

  const [isPlay, setIsPlay] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (isPlay) {
      const intervalId = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [isPlay]);

  const togglePlay = () => {
    setIsPlay(!isPlay);
  };

  return (
    <>
      <button onClick={togglePlay}>{isPlay ? "Pause" : "Play"}</button>
      {counter}
    </>
  );
}
