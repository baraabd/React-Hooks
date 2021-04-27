import react, { useState, useRef, useEffect } from "react";
import "./App.scss";
//import Input from "./components/input";
//import NameTag from "./components/nameTag";
import Item from "./components/item";
import useList from "./Hooks/useList";

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

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const keyPressHandle = (e)=> {
    if (e.keyCode == 13) {
      if (e.target.id == "nameInput") {
        alert("fds")
      }
      if (e.target.id == "calorieInput") {
        submitRef.current.focus()
      }
    }
  }

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

  const handleName = (e) => {
    setname(e.target.value);
  };

  const handleCalorie = (e) => {
    setcalorie(e.target.value);
  };

  const onSubmitHandle = () => {
    console.log("state = ", name, calorie);
  };

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
        <div>
          <form onSubmit={onSubmitHandle} className="formContainer">
            <div className="nameContainer">
              <span>Name of pruducct:</span>
              <input
                value={name}
                onChange={handleName}
                onKeyPress={keyPressHandle}
                ref={nameRef}
                id = "nameInput"
                type="text"
                placeholder="Rice"
              />
            </div>
            <div className="calorieContainer">
              <span>Calorie:</span>
              <select
                value={calorie}
                onChange={handleCalorie}
                onKeyDown={keyPressHandle}
                ref={calorieRef}
                id = "calorieInput"
              >
                <option value="high">High</option>
                <option value="mid">Mid</option>
                <option value="low">Low</option>
              </select>
            </div>
            <div className="buttonContainer">
              <button className="buttonStyle"
               onKeyDown={keyPressHandle}
               ref={submitRef}
               id = "submitId"
               >
                Submit
              </button>
            </div>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
