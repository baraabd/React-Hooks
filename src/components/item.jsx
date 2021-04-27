import React from "react";
import "./item.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const Item = (props) => {
  return (
    <div>
      <div className="list-st">
        <div className="listContainer">
          {props.editTable ? (
            <input
              type="text"
              onKeyPress={(e)=> props.onKeyPress(e, props.index)}
              defaultValue={props.item.name}
            />
          ) : (
            <h3 onDoubleClick={props.onDoubleClick}>{props.item.name}</h3>
          )}

          <h3>{props.item.calorie}</h3>
          <div className="iconContainer">
            <FontAwesomeIcon
              name={props.item.name}
              onClick={props.onClick}
              icon={faBan}
              size="3x"
              transform="shrink-6 left-4"
              className="iconDelete listIcon"
            />
            <FontAwesomeIcon
              onClick={props.onClickLike}
              icon={faThumbsUp}
              size="3x"
              transform="shrink-6 left-4"
              className="iconLike listIcon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
