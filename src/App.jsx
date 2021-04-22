import react from "react";
import "./App.scss";
import Input from "./components/input";
import NameTag from "./components/nameTag";


const makeGreen = BaseComponent => props => {
  const addGreen = {
    style: {
      color: "lightgreen"
    }
  }
  const newProps = {
    ...props, ...addGreen
  }

  return <BaseComponent {...newProps}/>
}

const removeInline = BaseComponent => props => {
  const newProps = {...props}
  delete newProps.style

  return <BaseComponent {...newProps}/>
}

const GreenNewTag = makeGreen(NameTag)
const CleanNameTag = removeInline(NameTag)


function App() {
  return (
    <div>
      <header className="App-header">
        <h1 className="nameStyle nameTagTitle">Names List</h1>
        {/*<Input placeholder="Skrev ditt namn här!" type="text"></Input> */}
        <GreenNewTag firstName="John" lastName="Anderson"></GreenNewTag>
        <CleanNameTag style={{color:'red'}} firstName="Joli" lastName="Johanson"></CleanNameTag>
        <NameTag style={{color:'red'}} firstName="Hanna" lastName="Peterson"></NameTag>
        <NameTag></NameTag>

      </header>
    </div>
  );
}

export default App;
