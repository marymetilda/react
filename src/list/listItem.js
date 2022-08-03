import React from "react";
import { useTooltip } from "../hooks/ourHooks";
import Label1 from "./label1";
import "./listitem.css";
import Tooltip from "./tooltip";

function ListItem(props) {
  const { title, descr, isActive, onDelete, onLabelClick } = props;

  const [showToolTip, setShowTooltip, labelRef, refObj] = useTooltip();

  return (
    <div className="list-item">
      <hr />
      <div className="list-title">
        <h4>{title}</h4>
        <label
          onClick={onDelete}
          ref={labelRef}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          Delete
          <Tooltip ref={refObj} showToolTip={showToolTip} />
        </label>
      </div>
      <div className="list-descr">{descr}</div>
      <div className="list-label">
        <Label1 isActive={isActive} onAction={onLabelClick} />
      </div>
    </div>
  );
}

export default ListItem;
