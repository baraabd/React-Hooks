import React from "react";
import './item.css'
const Item = (props) => {
  return (
    <div className='list-st'>
      <h3>{props.item.name}</h3>
      <h3>{props.item.calorie} C</h3>
    </div>
  );
};

export default Item;
