"use client";
import { useState } from "react";

export default function StateDemo() {
  const [count, setCount] = useState(0);
  const [numberOfClicks, setNumberOfClicks] = useState(0);

  // + and - buttons
  //div - count
  //div - number of button clicks

  // https://react.dev/learn/you-might-not-need-an-effect

  const handleCountsUpdate = (isAdd: boolean) => {
    if (isAdd) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
    setNumberOfClicks(numberOfClicks + 1);
  };

  return (
    <>
      <button onClick={() => handleCountsUpdate(true)}>+</button>
      {count}
      <button onClick={() => handleCountsUpdate(false)}>-</button>
      <div>Number of Clicks : {numberOfClicks}</div>
    </>
  );
}
