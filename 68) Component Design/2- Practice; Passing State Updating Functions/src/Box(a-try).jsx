import { useState } from "react";
import "./Box.css"

export default function Box() {
    const [color, setColor] = useState("blue")
    const toggleColor = () => {
        if (color === "blue") {
            setColor("red");
        } else if (color === "red") {
            setColor("blue");
        }
    }
    return (
        <section className="section">
            <div className="Box" style={{backgroundColor: color}}>            
            </div>
            <button className="button" onClick={toggleColor}>Toggle Color</button>    
        </section>
    )
}
