import react, { useState } from "react";
import "./App.scss";
import Input from "./components/input";
import NameTag from "./components/nameTag";
import Item from './components/item'
 function App() {

  const initList = [
    {name: 'Tomato', calorie: '20'},
    {name: 'Rice', calorie: '40'},
    {name: 'Candy', calorie: '100'}
  ]
  const [list, setList] = useState(initList)

  
  const removeUnhealthyHandle = (e) => {
    const filterList = list.filter(v => v.calorie <=50)
    setList(filterList)
  }

  return (
    <div>
      <header className="App-header">
        <h1>Grocery List</h1>
        {
          list.map((v,k)=>{
            return <Item key={`${k}${v.name}${v.calorie}`} item={v}></Item>
          })
        }

        <button onClick={removeUnhealthyHandle} className='removeButton' >Remove Unhealthy
        
        </button>
      </header>
    </div>
  );
}

export default App;
