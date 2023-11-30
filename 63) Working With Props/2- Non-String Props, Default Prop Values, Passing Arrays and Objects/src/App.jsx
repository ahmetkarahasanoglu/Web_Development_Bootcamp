import './App.css'
import Die from './Die.jsx'
import Chicken from "./Chicken";
import Greeter from "./Greeter";
import ListPicker from './ListPicker';

function App() {
  return (
    <>
      <div>
        <Greeter person="Bill" from="Colt" />
        <Greeter person="Ted" />
        <Greeter from="Elton" />  {/* For string props (~parameters) we use quotation marks. For other props ex: numbers etc. we use curly braces around it. */}
        <Die numSides={20}/>        
        <Die numSides={6}/>
        <Die numSides={10}/>
        {/* <ListPicker values={["a", "b", "c"]}/>   */}
                                        {/* '--> For any Javascript code we use curly braces around it. (to escape the JSX code). */}       
        {/* <ListPicker values={[{ a: 1, b: 2 }, { c: 3, d: 4 }]} /> */}
      </div>
    </>
  )
}

export default App;