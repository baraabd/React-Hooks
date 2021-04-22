import react from "react";
import "../App.scss"

const nameStyle = {
    color: "gray",
    border: "1px solid gray",
    width: "300px",
    padding: "10px",
    fontSize: "20px",
    textAlign: "center"

}
const NameTag = (props) => {
    return (
        <>
       
          <h3 style={nameStyle}>First Name: {props.firstName}</h3>
          <h3 style={nameStyle}>LastName: {props.lastName}</h3>
     
      </>
    );
};

export default NameTag;