import Die2_Den from "./Die2_Den"
import "./Dice.css";

export default function Dice2_Den({ dice, color }) {  // dice ex: [3, 6, 2]
    return (
        <section className="Dice">
            {dice.map((v, i) => (
                <Die2_Den key={i} val={v} color={color} />
            ))}
        </section>
    );
}