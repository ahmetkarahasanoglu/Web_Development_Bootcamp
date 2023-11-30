import "./MultiDiceRolls.css";
import RollDice from "./RollDice.js";

export default function MultiDiceRolls() {
  return (
    <div className="DieRoll">
      <h1>DICE ROLL</h1>
      <RollDice />
      <RollDice />
      <RollDice />
    </div>
  );
}
