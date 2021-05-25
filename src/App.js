import { useState } from "react";
import "./App.css";

import Add from "./Add";
import { GroupList } from "./Group";

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
          <input style={{ "margin-left": "1rem" }} onChange={handleChange} />
        </div>
      </div>
      <hr />
      <GroupList list={members} total={total}></GroupList>
    </div>
  );
}

export default App;
