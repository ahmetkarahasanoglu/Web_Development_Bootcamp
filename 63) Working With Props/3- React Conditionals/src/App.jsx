import './App.css'
import Die from './Die.jsx'
import Chicken from "./Chicken";
import Greeter from "./Greeter";
import ListPicker from './ListPicker';
import DoubleDice from './DoubleDice';
import Heading from './Heading';
import ColorList from "./ColorList.jsx"
import Slots from './Slots';

function App() {
  return (
    <>
      <div>
        <Heading color="magenta" text="Welcome!" fontsize="48px" />
        <Heading color="cyan" text="Blah" />
        <DoubleDice />
        <DoubleDice />
        <DoubleDice />

        <ColorList colors={["red", "pink", "purple", "teal"]} />
        <ColorList colors={["olive", "orangered", "slategrey"]} />

        <Slots val1="🍒" val2="🍒" val3="🍒" />
        <Slots val1="🍒" val2="🍌" val3="🍒" />
      </div>
    </>
  )
}

export default App;