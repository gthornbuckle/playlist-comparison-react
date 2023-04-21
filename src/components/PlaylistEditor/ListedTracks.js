import { React, useState } from "react";
import { Reorder } from "framer-motion";
import TrackItem from "./TrackItem";

const getTrackNames = arr =>{
  let initial = [];
  arr.forEach(e =>{
    initial.push(e.name)
  })

  return initial;
}

function ListedTracks(props){
  const [items, setItems] = useState(getTrackNames(props.tracks));

  return (
    <Reorder.Group 
      axis="y" 
      onReorder={setItems} 
      values={items}
      className="relative h-[52rem] overflow-y-auto bg-slate-600"
      layoutScroll
    >
      {items.map((track, i) => (
        <TrackItem key={track} item={track} index={i}/>
      ))}
    </Reorder.Group>
  );
}

export default ListedTracks;