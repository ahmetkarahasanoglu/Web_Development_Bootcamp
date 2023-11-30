import { useState } from "react";
import "./ColorBox.css"

export default function ColorBox() {
    const makeRandColor = function() {
        const r = Math.floor(Math.random() * 255) + 1;
        const g = Math.floor(Math.random() * 255) + 1;
        const b = Math.floor(Math.random() * 255) + 1;
        return `rgb(${r}, ${g}, ${b})`;
    }   
    const [backgroundColor1, setBackgroundColor1] = useState(makeRandColor());
    const [backgroundColor2, setBackgroundColor2] = useState(makeRandColor());
    const [backgroundColor3, setBackgroundColor3] = useState(makeRandColor());
    
    function changeBackgroundColor1() {
        const newColor = makeRandColor();
        setBackgroundColor1(newColor);
    }

    function changeBackgroundColor2() {
        const newColor = makeRandColor();
        setBackgroundColor2(newColor);
    }

    function changeBackgroundColor3() {
        const newColor = makeRandColor();
        setBackgroundColor3(newColor);
    }

    return (
        <section className="rowSection" style={{display: "flex"}}>
            <div onClick={changeBackgroundColor1} style={{backgroundColor: backgroundColor1, }}></div>
            <div onClick={changeBackgroundColor2} style={{backgroundColor: backgroundColor2, }}></div>
            <div onClick={changeBackgroundColor3} style={{backgroundColor: backgroundColor3, }}></div>            
        </section>
    )
}
