import react, {Fragment} from "react";
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
        <div style={nameStyle}>
       
          <h3 >First Name: {props.firstName}</h3>
          <h3 >LastName: {props.lastName}</h3>
     
      </div>
    );
};

export default NameTag;