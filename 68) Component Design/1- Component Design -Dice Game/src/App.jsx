// !!!!!! THIS APP FILE IS MY CODE. THE OTHER APP FILE IS TEACHER'S CODE.

import LuckyN2_Den from "./LuckyN2_Den"
import { sum } from "./utils"

function lessThan4(dice) {
    return sum(dice) < 4;
}

function areAllDiceEqual(dice) {
    return dice.every((v) => v === dice[0]);
    // let checker = true;                  // this block below is my version; works the same as the above line.
    // for (let i=1; i<dice.length; i++) {
    //     checker =  checker * ( dice[0] === dice[i] )
    // }
    // if(checker === 1) return true;
    // else if (checker === 0) return false;
}    

export default function App() {
    return(
        <>            
            {/* <LuckyN2_Den numDice={3} goal={11} /> */}
            <LuckyN2_Den winCheck={lessThan4} title="Roll less than 4" />  {/* --> sending a function as props. */}            
            <LuckyN2_Den winCheck={areAllDiceEqual} title="Roll the same number" />
        </>
    )
}


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
In our game hierarchy, only LuckyN component is 'logical', other are 'presentational' (App, Dice, Die).

**Die Component**
Props:   val: number
State:   none!
Events:  none!
*/