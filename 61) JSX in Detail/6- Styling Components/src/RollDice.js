import "./Die.css";

export default function RollDice() {
  const roll = Math.floor(Math.random() * 6) + 1;
  return <h2 className="Die">Dice roll result: {roll} </h2>;
}
