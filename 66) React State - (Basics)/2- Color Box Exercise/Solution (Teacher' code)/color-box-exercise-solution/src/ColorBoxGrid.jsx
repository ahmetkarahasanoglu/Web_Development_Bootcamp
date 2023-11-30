import ColorBox from "./ColorBox";
import "./ColorBoxGrid.css";

function ColorBoxGrid({ colors }) {
  const boxes = [];
  for (let i = 0; i < 25; i++) {  // We're creating a 25-element array.
    boxes.push(<ColorBox colors={colors} />);  //  We're putting ColorBox to each element. (25 ColorBox)
  }
  return <div className="ColorBoxGrid">{boxes}</div>;
}

export default ColorBoxGrid;
