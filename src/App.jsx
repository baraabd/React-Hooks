import React, { useState, useEffect } from "react";
import "./App.scss";
//import Input from "./components/input";
//import NameTag from "./components/nameTag";

let born = false
function App() {
  const [growth, setgrowth] = useState(0)
  const [nirvana, setNirvana] = useState(false)

  useEffect(() => {
    console.log('I am born')
  }, [])

  useEffect(() => {
    if (born) {
      document.title = "Nirvana attained"
    }
  },[nirvana])

useEffect(() => {
  if (born) {
    console.log('Make mistake and learn')
  } else {
    born = true
  }
  if (growth > 70) {
    setNirvana(true)
  }

  return function cleanup() {
    console.log('cleanup after mistakes')
  }
})

const growthHandle = () =>{
  setgrowth(growth + 10)
}

  return (
    <div>
      <header className="App-header">
        <h2>Use Effect</h2>
        <h3>growth: {growth}</h3>
        <button onClick={growthHandle}>Learn and grow</button>
      </header>
    </div>
  );
}

export default App;
