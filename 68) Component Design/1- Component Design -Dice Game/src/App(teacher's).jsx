import LuckyN from "./LuckyN";
import { sum } from "./utils";
import BoxGrid from "./BoxGrid";

function lessThan4(dice) {
  return sum(dice) < 4;
}

function allSameValue(dice) {
  return dice.every((v) => v === dice[0]);
}

function App() {
  return (
    <>
      {/* <BoxGrid /> */}
      <LuckyN winCheck={lessThan4} title="Roll less than 4" />
      <LuckyN
        winCheck={allSameValue}
        numDice={3}
        title="Roll the same number"
      />
    </>
  );
}

export default App;


/* 
REQUIREMENTS OF THE DICE GAME:

A set of components for:
- Play a dice game with "numDice" number of dice (lucky5, lucky9 etc.).
- A "goal" number. This is the number that all the dice try to sum up to; (total). And show a win message when total equals goal score.
- A "roll again" button that re-rolls all the dice.

OUR COMPONENT HIERARCHY:
App --> LuckyN --> Dice --> Die Die

* What props do we need? What state do we need? And where?
- In React, we cannot pass 'state' upwards. We can only pass 'state' downwards (in the direction from App to Die)
- State Design Principle: Lift the state as high as needed, but no higher (not to the App; App doesn't need it; App just renders the components).

* The aim to have components is two:
  - Presentational: Doesn't have state; is primarily about appearance/UI.
  - Logical: Has state or related logic; isn't about a specific UI.
I our game hierarchy, only LuckyN component is 'logical', other are 'presentational' (App, Dice, Die).

**Die Component**
Props:   val: number
State:   none!
Events:  none!
*/