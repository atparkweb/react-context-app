import React from "react";

import "./Add.css";

function Add({ onAdd }) {
  let inputRef = React.useRef();

  const handleClick = e => {
    onAdd(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <div className="Add">
      <label className="Add-label">
        <span className="Add-label-text">New Member:</span>
        <input className="Add-input" type="text" ref={inputRef} />
      </label>
      <button className="Add-button" onClick={handleClick}>
        Add Member
      </button>
    </div>
  );
}

export default Add;
