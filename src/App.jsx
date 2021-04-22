import react from "react";
import "./App.scss";
import NameTag from "./components/nameTag";

function App() {
  return (
    <div>
      <header className="App-header">
        <h1 className="nameStyle nameTagTitle">Names List</h1>
        <NameTag >Peter</NameTag>
        <NameTag >Joli</NameTag>
        <NameTag >Hanna</NameTag>

      </header>
    </div>
  );
}

export default App;
