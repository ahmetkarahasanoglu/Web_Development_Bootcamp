import { useState } from "react";
import { getRolls } from "./utils"
import Dice2_Den from "./Dice2_Den";
import Button from "./Button";

// export default function LuckyN2_Den({numDice=2, goal= 7}) {
export default function LuckyN2_Den({title="Dice Game", numDice=2, winCheck}) {  // We added 'winCheck' function that is passed as props. (compared to the above line of code). / We sent lessThan4 function as props from App.jsx (with the reference 'winCheck') 
    const [dice, setDice] = useState(getRolls(numDice));
    // const isWinner = sum(dice) === goal;
    const isWinner = winCheck(dice);  // 'winCheck' function arrangement (we had added wincheck function). [It was just like the above line of code before, later we changed it like this here.]
    const roll = () => setDice(getRolls(numDice))
    return (
        <main className="LuckyN">
            <h1>{title} {isWinner && "YOU WiN!"}</h1>
            <Dice2_Den dice={dice} />            
            {/* <button onClick={roll}>Roll Again</button> */}
            <Button clickFunc={roll} label="Re-roll"/>  {/* passing function as props. [passing function that update state] (roll function) */}
            
        </main>
    )
}