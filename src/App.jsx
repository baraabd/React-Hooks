import react from "react";
import "./App.scss";
import NameTag from "./components/nameTag";

function App() {
  return (
    <div>
      <header className="App-header">
        <h1 className="nameStyle nameTagTitle">Names List</h1>
        <NameTag name="Peter"></NameTag>
        <NameTag name="Peter"></NameTag>
        <NameTag name="Peter"></NameTag>

      </header>
    </div>
  );
}

export default App;
