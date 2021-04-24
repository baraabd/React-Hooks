import react, { useState } from "react";
import "./App.scss";
import Input from "./components/input";
import NameTag from "./components/nameTag";
import Item from "./components/item";
function App() {
  const initList = [
    { name: "Tomato", calorie: "20" },
    { name: "Rice", calorie: "40" },
    { name: "Candy", calorie: "100" },
  ];
  const [list, setList] = useState(initList);
  const [editTable, seteditTable] = useState(false);

  /* const removeUnhealthyHandle = (e) => {
    const filterList = list.filter(v => v.calorie <=50)
    setList(filterList)
  } */


  const removeItemHandle = (e) => {
    console.dir(e.target.getAttribute("name"));

    const filteredList = list.filter(
      (v) => v.name !== e.target.getAttribute("name")
    );
    setList(filteredList);
  };

  const makeEditTableHandle = () => {
    
    seteditTable(true);
  };
  

  /* const removeItemHandle = (e) => {
    console.dir(e.target)
  } */

  return (
    <div>
      <header className="App-header">
        <h1>Grocery List</h1>
        {list.map((v, k) => {
          return (
            <Item
              key={`${k}${v.name}${v.calorie}`}
              item={v}
              onClick={removeItemHandle}
              editTable= {editTable}
              onDoubleClick= {makeEditTableHandle}
            ></Item>
          );
        })}

        {/* <button onClick={removeUnhealthyHandle} className='removeButton' >Remove Unhealthy 
        
        </button>*/}
      </header>
    </div>
  );
}

export default App;
