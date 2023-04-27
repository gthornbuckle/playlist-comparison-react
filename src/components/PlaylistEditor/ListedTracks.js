import { React, useState, useEffect } from "react";
import { Reorder } from "framer-motion";
import TrackItem from "./TrackItem";

function ListedTracks(props){
  const [items, setItems] = useState(props.tracks.map(e=> e));

  const passNewOrder = data =>{
    props.newOrder(data);
  }

  const remove = item =>{
    if(items.length === 1){
      return;
    }else{
      const removed = items.filter(track => track.id !== item.id);
      setItems(removed);
    }
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
        <TrackItem key={track.id} item={track} index={i} remove={() => remove(track)} currentLength={items.length}/>
      ))}
    </Reorder.Group>
  );
}

export default ListedTracks;