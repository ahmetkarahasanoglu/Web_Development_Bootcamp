import "./styles.css";

function Greeter() {
  return <h1>HOWDY!</h1>;
}

function YellingDog() {
  return <p>Woof!</p>;
}

export default function App() {
  return (
    <div className="App">
      <h1>This is CodeSandbox!!!!!!!!!</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input type="text" />
      <Greeter />
      <Greeter />
      <YellingDog />
    </div>
  );
}
