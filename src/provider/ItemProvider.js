import { createContext, useContext, useState } from "react";

const ItemContext = createContext();
const list = [
  { task: "Complete presentation for the meeting", done: false },
  { task: "Buy groceries for the week", done: true },
  { task: "Walk the dog", done: false },
  { task: "Finish reading the book", done: false },
  { task: "Schedule a doctor's appointment", done: false },
];

const ItemProvider = ({ children }) => {
  const [items, setitems] = useState(list);
  const addItem = (item) => {
    setitems([item, ...items]);
  };

  const markAsDone = (index) => {
    const updatedItem = [...items];
    updatedItem[index].done = !updatedItem[index].done;
    setitems(updatedItem);
  };
  return (
    <ItemContext.Provider value={{ items, addItem, markAsDone }}>
      {children}
    </ItemContext.Provider>
  );
};

export const useItemsContext = () => useContext(ItemContext);
export default ItemProvider;
