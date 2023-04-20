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

const checkStringLength = str =>{
  if(str.length > 50){
    return `${str.substr(0, 50)}...`;
  } else{
    return str;
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
      <p className="overflow-hidden">{props.index +1}&nbsp;&nbsp;{checkStringLength(props.item)}</p>
    </Reorder.Item>
  );
};

export default TrackItem;