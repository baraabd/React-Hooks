import react from "react";
import "./App.scss";
import Input from "./components/input";
import NameTag from "./components/nameTag";

function App() {
  return (
    <div>
      <header className="App-header">

        <h1 className="nameStyle nameTagTitle">Names List</h1>
        <Input placeholder="Skrev ditt namn här!" type="text"></Input>
        <NameTag firstName="Peter" lastName="Anderson"></NameTag>
        <NameTag firstName="Joli" lastName="Johanson"></NameTag>
        <NameTag firstName="Hanna" lastName="Peterson"></NameTag>

      </header>
    </div>
  );
}

export default App;
