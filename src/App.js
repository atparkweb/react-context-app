import React, { useState } from "react";
import "./App.css";

import Add from "./Add";
import { GroupList } from "./Group";

import TotalContext from "./TotalContext";
import MembersContext from "./MembersContext";

function App() {
  const [members, setMembers] = useState([]);
  const [total, setTotal] = useState(0);

  const handleChange = e => {
    const input = parseInt(e.target.value, 10);
    if (!isNaN(input)) {
      setTotal(input);
    } else {
      e.target.value = null;
      setTotal(0);
    }
  };

  const handleAdd = name => {
    setMembers(
      members.concat({
        name: name,
        id: Date.now(),
      })
    );
  };

  return (
    <div className="App">
      <div className="App-controls">
        <Add onAdd={handleAdd} />
        <div>
          Total: ¥
          <input style={{ marginLeft: "1rem" }} onChange={handleChange} />
        </div>
      </div>
      <hr />
      <TotalContext.Provider value={total}>
        <MembersContext.Provider value={members}>
          <GroupList list={members}></GroupList>
        </MembersContext.Provider>
      </TotalContext.Provider>
    </div>
  );
}

export default App;
