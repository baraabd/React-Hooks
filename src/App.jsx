import react, { useState } from "react";
import "./App.scss";
import Input from "./components/input";
import NameTag from "./components/nameTag";

function App() {
  const [age, setAge] = useState(21);

  const ageUpHandle = () => {
    setAge(age +1)
  }

  const ageDownHandle = () => {
    setAge(age -1)
  }

  return (
    <div>
      <header className="App-header">
        <h1>Use State Hooks</h1>
        <h2>Age: {age} </h2>
        <div className="buttonContainer">
          <button onClick={ageUpHandle} className="buttonStyle">Age up</button>
          <button onClick={ageDownHandle} className="buttonStyle">Age down</button>
        </div>
      </header>
    </div>
  );
}

export default App;
