import React, { useState, useRef, useEffect } from "react";
import "./App.scss";
//import Input from "./components/input";
//import NameTag from "./components/nameTag";
import Item from "./components/item";
import useList from "./Hooks/useList";
import InputText from "./components/inputText";
import SelectOption from "./components/selectOption";

const initList = [
  { name: "Tomato", calorie: "Low" },
  { name: "Rice", calorie: "Mid" },
  { name: "Candy", calorie: "High" },
];

function App() {
  const [name, setname] = useState("default");
  const [calorie, setcalorie] = useState("High");

  const items = useList(initList);
  const [editTable, seteditTable] = useState(false);

  const nameRef = useRef();
  const calorieRef = useRef();
  const submitRef = useRef();

  

  const removeItemHandle = (e) => {
    items.removeItem(e.target.getAttribute("name"));
  };

  const makeEditTableHandle = () => {
    seteditTable(true);
  };

  const saveDataHandle = (e, index) => {
    if (e.key === "Enter") {
      seteditTable(false);
      items.saveItem(index, e.target.value);
    }
  };

  const nameKeyDownHandle = (e) => {
    if (e.key== "Enter") {
      
    }
  }

  const selectKeyDownHandle = (e) => {
    if (e.key== "Enter") {
      
    }
  }

  return (
    <div>
      <header className="App-header">
        <div>
          <h1>Grocery List</h1>
          {items.list.map((v, k) => {
            return (
              <Item
                key={`${k}${v.name}${v.calorie}`}
                item={v}
                onClick={removeItemHandle}
                editTable={editTable}
                onDoubleClick={makeEditTableHandle}
                onKeyPress={saveDataHandle}
                index={k}
              ></Item>
            );
          })}

          {/* <button onClick={removeUnhealthyHandle} className='removeButton' >Remove Unhealthy 
        
        </button>*/}
        </div>
        <div className="inputContainer">
          <InputText
            ref ={nameRef}
            type ="text"
            placeholder ="Type product name here!"
            onKeyDown={nameKeyDownHandle}
          ></InputText>

          <SelectOption
          selectKeyDown={selectKeyDownHandle}
          
          ></SelectOption>
        </div>
      </header>
    </div>
  );
}

export default App;
