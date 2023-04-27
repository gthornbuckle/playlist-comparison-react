import { React, useState } from "react";
import { motion, Reorder } from "framer-motion";

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

const dragVariantsBtn = {
  initial: {
    backgroundColor: "#14b8a6"
  },
  dragging: { 
      backgroundColor: "#ec4899",
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

const checkFinal = length =>{
  if (length === 1){
    console.log("Length 1")
    return {
      display: "none"
    }
  }else{
    return
  }
}

  return (
    <Reorder.Item 
      value={props.item} 
      id={props.item} 
      className="p-3 cursor-grab relative mb-1 text-left bg-slate-700"
      onDragStart={() => setDrag(true)} onDragEnd={() => setDrag(false)}
      initial={false}
      animate={isDrag ? "dragging" : "initial"}
      variants={dragVariants}
    >
      <span className="flex flex-row items-center justify-between">
        <p className="text-lg overflow-hidden">{props.index +1}&nbsp;&nbsp;{checkStringLength(props.item.name)}</p>
        <motion.button className="p-1 bg-teal-500 text-white text-lg font-medium rounded-md"
          whileHover={{backgroundColor: "#ec4899"}}
          whileTap={{scale: 0.8}}
          initial={false}
          animate={isDrag ? "dragging" : "initial"}
          variants={dragVariantsBtn}
          onClick={props.remove}
          style={checkFinal(props.currentLength)}
        >
          Delete
        </motion.button>
      </span>
    </Reorder.Item>
  );
};

export default TrackItem;