import { React, useState, useEffect } from "react";
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
  const [items, setItems] = useState(props.tracks.map(e=> e));

  const passNewOrder = data =>{
    props.newOrder(data);
  }

  useEffect(() =>{
    passNewOrder(items);
  }, [items]);

  return (
    <Reorder.Group 
      axis="y" 
      onReorder={setItems} 
      values={items}
      className="mt-4 h-[48rem] overflow-y-auto bg-slate-600"
      layoutScroll
    >
      {items.map((track, i) => (
        <TrackItem key={track.id} item={track} index={i}/>
      ))}
    </Reorder.Group>
  );
}

export default ListedTracks;