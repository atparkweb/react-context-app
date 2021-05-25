import { useState } from "react";
import "./App.css";

import Add from "./Add";
import { GroupList } from "./Group";

const defaultList = [
  {
    name: "Curtis",
    id: 1,
  },
  {
    name: "Yukari",
    id: 2,
  },
  {
    name: "Daichi",
    id: 3,
  },
];

function App() {
  const [members, setMembers] = useState(defaultList);
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
      <Add onAdd={handleAdd} />
      <div>
        Total: ¥<input onChange={handleChange} />
      </div>
      <GroupList list={members} total={total}></GroupList>
    </div>
  );
}

export default App;
