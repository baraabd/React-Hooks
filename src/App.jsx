import react, { useState } from "react";
import "./App.scss";
import Input from "./components/input";
import NameTag from "./components/nameTag";
import Item from "./components/item";
import useList from './Hooks/useList'


const initList = [
  { name: "Tomato", calorie: "20" },
  { name: "Rice", calorie: "40" },
  { name: "Candy", calorie: "100" },
];

function App() {
  
  const items = useList(initList);
  const [editTable, seteditTable] = useState(false);

  const removeItemHandle = (e) => {
    items.removeItem(e.target.name);
  };

  const makeEditTableHandle = () => {
    seteditTable(true);
  };

  const saveDataHandle = (e, index) => {
    if (e.key=== "Enter") {
      seteditTable(false);
      items.saveItem(index, e.target.value)
    }
  };
  

  return (
    <div>
      <header className="App-header">
        <h1>Grocery List</h1>
        {items.list.map((v, k) => {
          return (
            <Item
              key= {`${k}${v.name}${v.calorie}`}
              item= {v}
              onClick= {removeItemHandle}
              editTable= {editTable}
              onDoubleClick= {makeEditTableHandle}
              onKeyPress= {saveDataHandle}
              index= {k}
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
