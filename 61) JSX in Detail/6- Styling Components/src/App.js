import Greeter from "./Greeter.js";
import YellingDog from "./YellingDog.js";
import RollDice from "./RollDice.js";
import MultiDiceRolls from "./MultiDiceRolls.js";

export default function App() {
  return (
    <div className="App">
      <MultiDiceRolls />
      <MultiDiceRolls />
    </div>
  );
}
