import { React, useState } from "react";
import { Reorder } from "framer-motion";

const dragVariants = {
  initial: {
    color: "#cbd5e1",
    backgroundColor: "#334155"
  },
  dragging: { 
      color: "#ec4899",
      backgroundColor: "#14b8a6",
      fontWeight: 700
  }
}

function TrackItem(props){
const [isDrag, setDrag] = useState(false);

  return (
    <Reorder.Item 
      value={props.item} 
      id={props.item} 
      className="p-1 cursor-grab relative mb-1 text-left bg-slate-700"
      onDragStart={() => setDrag(true)} onDragEnd={() => setDrag(false)}
      initial={false}
      animate={isDrag ? "dragging" : "initial"}
      variants={dragVariants}
    >
      <p>{props.item}</p>
    </Reorder.Item>
  );
};

export default TrackItem;