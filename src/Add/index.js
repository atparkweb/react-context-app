import React from "react";

function Add({ onAdd }) {
  let inputRef = React.useRef();

  const handleClick = e => {
    onAdd(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <div>
      <label>
        New Member:
        <input type="text" ref={inputRef} />
      </label>
      <button onClick={handleClick}>Add Member</button>
    </div>
  );
}

export default Add;
