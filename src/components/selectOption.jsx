import React from "react";

const SelectOption = ({ref}) => {
  return (
    <div>
      <select onkeydown={onkeydown} ref={ref} name="" id="" className="selectOption">
        <option value="high">High</option>
        <option value="mid">Mid</option>
        <option value="low">Low</option>
      </select>
    </div>
  );
};

const ForwardedSelect = React.forwardRef(SelectOption)

export default ForwardedSelect;
