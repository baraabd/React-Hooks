import react, { useState } from "react";
import "./App.scss";
import Input from "./components/input";
import NameTag from "./components/nameTag";

 function App() {
   /*
  const [age, setAge] = useState(21);

  const ageUpHandle = () => {
    setAge(age +1)
  }

  const ageDownHandle = () => {
    setAge(age -1)
  } */

  const initialName = [
    {firstName: "John", lastName:"Anderson"},
    {firstName: "Joli", lastName:"Johanson"},
    {firstName: "Hanna", lastName:"Anderson"}

  ]

  const [names, setNames] = useState(initialName) 

  return (
    <div>
      <header className="App-header">
      <h1 className="nameStyle nameTagTitle">Names List</h1>
        {/* <Input placeholder="Skrev ditt namn här!" type="text"></Input> */}
        {/* <NameTag firstName="Peter" lastName="Anderson"></NameTag>
        <NameTag firstName="Joli" lastName="Johanson"></NameTag>
        <NameTag firstName="Hanna" lastName="Hanna"></NameTag> */}
        {

        names.map((value,index) => {
          return (
            <NameTag key={`${index}${value.firstName}${value.lastName}`} firstName={value.firstName} lastName={value.lastName}></NameTag>
          )
        })
        }
      </header>
    </div>
  );
}

export default App;
