import { useState } from "react";

export default function Counter() {
    console.log("COMPONENT RENDERED.")
    const [count, setCount] = useState(0);

    const addOne = () => {  // 
        setCount(count + 1);
    };
    const addThree = () => {
        // setCount(count + 1);  // [this format in this line is wrong, we should use function with parameter, just like below.]
        // setCount(count + 1);        
        // setCount(count + 1);
        setCount((currentCount) => currentCount + 1);  // if the new state depends on the old state, we should use this format which takes parameter (of the current value) with an arrow function.      
        setCount((currentCount) => currentCount + 1);
        console.log(count);
        setCount((currentCount) => currentCount + 1);
    }
    const setToTen = () => {
        setCount(10);  // if the new state doesn't depend on the old state (like the one in here), we don't have to use the arrow function.
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={addOne}>Add 1</button>
            <button onClick={addThree}>Add 3</button>
            <button onClick={setToTen}>Set To 10</button>
        </div>
    )
}