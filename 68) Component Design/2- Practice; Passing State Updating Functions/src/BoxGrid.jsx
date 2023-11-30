import { useState } from "react";
import Box from "./Box";

export default function BoxGrid({}) {
    const [boxes, setBoxes] = useState([false, false, false, false, false, false, false, false, false]);
    // '--> We're applying the principle of "Lift the state as high as needed". First, we considered the state to be on 'Box.jsx' (the final file in the hierarchy). But after the idea of putting a reset button, we lifted the state here on this file.
    
    const reset = () => {
        setBoxes([false, false, false, false, false, false, false, false, false]) ;
    }

    const toggleBox = (idx) => {
        setBoxes((oldBoxes) => {
            return oldBoxes.map((value, i) => {
                if (i === idx) {
                    return !value;
                } else {
                    return value;
                }
            })
        })
    }
    
    return (
        <div className="BoxGrid">
            {boxes.map((b, idx) => (
                <Box key={idx} isActive={b} toggle={() => toggleBox(idx)}/>  // A common mistake that might be done: don't write 'toggleBox(idx)' inside the curly braces there. Write '() => toggleBox(idx)'. Because if you do that mistake (write in the first format), you invoke 'toggleBox' function immediately, instead of passing a reference to it.
            ))}
            <button onClick={reset}>Reset</button>
        </div>
    )
}
