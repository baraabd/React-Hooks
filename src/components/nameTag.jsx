import react from "react";
import "../App.scss"

const nameStyle = {
    color: "gray",
    border: "1px solid gray",
    width: "300px",
    padding: "10px"
}
const NameTag = (props) => {
    return (
        <div className="App">
          <h3 style={nameStyle}>{props.name}</h3>
      </div>
    );
};

export default NameTag;