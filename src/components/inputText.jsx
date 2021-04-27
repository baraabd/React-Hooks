import React from "react";

const inputStyle = {
    width: "400px",
    height: "40px",
    fontSize: "30px"
}
const InputText = ({placeholder}, props, ref) => {

  return (
    <div>
        <input onKeyDown={props.onKeyDown} ref={ref} placeholder={placeholder} style={inputStyle}/>
    </div>

  )

};

const ForwardedAddData = React.forwardRef(InputText)

export default ForwardedAddData;
