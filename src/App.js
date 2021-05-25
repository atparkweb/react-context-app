import React, { useCallback, useState } from "react";
import "./App.css";

import Add from "./Add";
import { GroupList } from "./Group";

import BillContext from "./BillContext";

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

  const getPrice = React.useMemo(() => {
    return Math.round(total / members.length);
  }, [total, members]);

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
      <BillContext.Provider value={Math.round(total / members.length)}>
        <GroupList list={members}></GroupList>
      </BillContext.Provider>
    </div>
  );
}

export default App;
