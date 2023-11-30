function handleClick() {
  console.log("CLICKED THE BUTTON!!!");
}

function handleHover() {
  console.log("HOVERED!!");
}

export default function Clicker() {
  return (
    <div>
      <p onMouseOver={handleHover}>Hover Over Me</p>  {/* onMouseOver, onClick etc. are "camel cased" in react; as opposed to in basic javascript (it was 'onmouseover, onclick' etc.) */}
      <button onClick={handleClick}>Click</button>
      <button
        onClick={() =>
          console.log("CLICKED THE INLINE ARROW FUNCTION VERSION!")
        }
      >        
        Inline Function (CLICK ME!)
      </button>     
    </div>
  );
}
