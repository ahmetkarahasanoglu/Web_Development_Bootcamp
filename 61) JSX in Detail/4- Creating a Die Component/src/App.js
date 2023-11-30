import "./styles.css";
import Greeter from "./Greeter.js";
import YellingDog from "./YellingDog.js";
import RollDice from "./RollDice.js";

export default function App() {
  return (
    <div className="App">
      <h1>This is CodeSandbox!!!!!!!!!</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input type="text" />
      <YellingDog />
      <Greeter />
      <RollDice />
      <RollDice />
    </div>
  );
}
