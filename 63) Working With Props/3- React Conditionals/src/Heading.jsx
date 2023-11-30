export default function Heading({ color = "olive", text, fontSize }) {
  return <h1 style={{ color: color, fontSize: fontSize }}>{text}</h1>;  // The first curly brace is to escape JSX.
}


// [I WANTED TO MAKE A HEADING THAT CHANGES COLOR DEPENDING ON A RANDOM NUMBER BEING EVEN OR ODD]:
// export default function Heading({ color = "olive", text, fontSize }) {
//   const randNum = Math.floor(Math.random() * 10) + 1;
//   const isEven = randNum % 2 === 0;
//   const styles = { color: isEven ? "blue" : "red", fontSize: fontSize };
//   return <h1 style={styles}>{text}</h1>;
// }