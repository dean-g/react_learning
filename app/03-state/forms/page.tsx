"use client";

import { useState } from "react";

export default function FormDemo() {
  const [text, setText] = useState("Dummy");
  const [color, setColor] = useState("000000");

  return (
    <div>
      <h1>Form Demo</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}>
      </input>
      <div style={{color: color}}>{text}</div>
    </div>
  );
}
