import { useState } from "react";
import "./ColorBox.css";

function randomChoice(arr) {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

export default function ColorBox({ colors }) {  // this function is about 1 colorbox.
  const [color, setColor] = useState(randomChoice(colors));  // useState(INITIAL_VALUE)
  const changeColor = () => {
    const randomColor = randomChoice(colors);
    setColor(randomColor);
  };
  return (
    <div
      className="ColorBox"
      onClick={changeColor}
      style={{ backgroundColor: color }}
    ></div>
  );
}
