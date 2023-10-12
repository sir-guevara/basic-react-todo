import { useState } from "react";
import { useItemsContext } from "../provider/ItemProvider";

function Header() {
  const { addItem } = useItemsContext();
  const [item, setitem] = useState("");

  const handleChange = (e) => {
    setitem(e.target.value);
  };
  const addTask = () => {
    addItem({ task: item, done: false });
    setitem("");
  };

  return (
    <div>
      <h1>Task Bunny</h1>
      <small>Get More Done, Hop On Board with Task Bunny!</small>
      <div className="form">
        <input
          type="text"
          placeholder="Todo Task"
          onChange={handleChange}
          value={item}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
    </div>
  );
}

export default Header;
