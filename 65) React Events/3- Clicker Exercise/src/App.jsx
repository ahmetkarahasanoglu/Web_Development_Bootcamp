import "./App.css";
import Clicker from "./Clicker";

function App() {
  return (
    <div>
      <Clicker buttonText="Please Click Me!" message="HI!"/>
      <Clicker buttonText="Do Not Click!" message="Please Stop Clicking Me!" />
    </div>
  );
}

export default App;
