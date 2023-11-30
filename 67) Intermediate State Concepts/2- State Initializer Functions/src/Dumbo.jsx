import { useState } from "react";

function generateGameBoard() {
  console.log("MAKING THE INITIAL GAME BOARD");
  return Array(5000);
}
export default function Dumbo() {
  const [board, setBoard] = useState(generateGameBoard);  // The useful way: If we use the thing in paranthesis as 'generateGameBoard', React will execute it just at the first time (for initial state) [which is the useful way]; But if we use it as 'generateGameBoard()' (with paranthesis at the end) then React will execute it also on subsequent executions but React will ignore to execute the "return Array(5000)" [the return value] on the subsequent executions, but it will run the 'console.log("MAKING THE INITIAL GAME BOARD")'.
  return (
    <button onClick={() => setBoard("hello!")}>Click me to change state</button>
  );
}
