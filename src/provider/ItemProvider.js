import { createContext, useContext, useState } from "react";

const ItemContext = createContext();
let c = localStorage.getItem("tastList");
let list = [];
if (c) {
  list = JSON.parse(c);
} else {
  localStorage.setItem("tastList", "");
}

const ItemProvider = ({ children }) => {
  const [items, setitems] = useState(list);
  const addItem = (item) => {
    const updatedItems = [item, ...items];
    setitems(updatedItems);
    localStorage.setItem("tastList", JSON.stringify(updatedItems));
  };

  const markAsDone = (index) => {
    const updatedItem = [...items];
    updatedItem[index].done = !updatedItem[index].done;
    setitems(updatedItem);
    localStorage.setItem("tastList", JSON.stringify(updatedItem));
  };
  return (
    <ItemContext.Provider value={{ items, addItem, markAsDone }}>
      {children}
    </ItemContext.Provider>
  );
};

export const useItemsContext = () => useContext(ItemContext);
export default ItemProvider;
