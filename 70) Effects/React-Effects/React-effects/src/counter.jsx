import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(              // Pay att: this is a function execution.
    function myEffect() {
      console.log("MY EFFECT WAS CALLED!");
    },
    [count]
  );  // '--> This code block means: If there is any change in 'count', run myEffect function. /// The syntax is: useEffect(myCallbackFn, [productId, userId]); --> Runs myCallbackFn effect only if productId or userId variables change.  /  useEffect(myCallbackFn); --> Runs myCallbackFn effect after every render.  /  useEffect(myCallbackFn, []); --> Runs myCallbackFn effect only the first time (on mount)

  const increment = () => {
    setCount((c) => c + 1);
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+1</button>
      <p>Name: {name}</p>
      <input value={name} onChange={handleChange} type="text" />
    </div>
  );
}
