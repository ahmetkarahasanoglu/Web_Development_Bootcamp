/* useState() is a React method. It's used like this: (array destructuring is used):
const [count, setCount] = useState(0);  --> for a counter that starts from 0.
'useState()' returns an array containing two elements:
    - The piece of state itself,
    - A function to change the piece of state.
You must call useState INSIDE a component.
*/

import { useState } from "react";

export default function Counter() {
  const [num, setNum] = useState(5);  // useState() method.
  console.log("COMPONENT HAS BEEN EXECUTED AGAIN!");
  console.log(`num: ${num}`);
  const changeNum = () => {
    setNum(num + 1);
    console.log("SET NUM HAS RUN!");
    console.log(`num: ${num}`);
  };
  return (
    <div>
      <p>The count is: {num}</p>
      <button onClick={changeNum}>Increment</button>
    </div>
  );
}
