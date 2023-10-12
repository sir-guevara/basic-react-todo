import { useItemsContext } from "../provider/ItemProvider";

export default function Item(props) {
  const itemStyle = {
    background: "white",
    color: "black",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1px 20px",
    margin: "10px auto",
    borderRadius: "15px",
    boxShadow: "0 0 2px rgba(0,0,0,.1)",
    width: "500px",
    fontSize: "15px",
    fontFamily: "monospace",
    fontWeight: "400",
    textTransform: "capitalize",
    textDecoration: props.isDone ? "line-through" : "none",
    textDecorationColor: "#2f5bb4",
    transition: "all 1s ease-in-out",
  };
  const { markAsDone } = useItemsContext();
  return (
    <div style={itemStyle}>
      <p>{props.todo}</p>
      <input
        type="checkbox"
        checked={props.isDone}
        onChange={() => markAsDone(props.index)}
      />
    </div>
  );
}
