import { useItemsContext } from "../provider/ItemProvider";
import Item from "./Item";

export default function List() {
  const { items } = useItemsContext();
  const style = {
    display: "flex",
    flexDirection: "column",
  };
  return (
    <div style={style}>
      {items.map((item, index) => (
        <Item key={index} index={index} todo={item.task} isDone={item.done} />
      ))}
    </div>
  );
}
