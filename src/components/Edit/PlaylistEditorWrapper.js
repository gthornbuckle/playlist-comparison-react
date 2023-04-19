import { React, useState } from "react";
import { motion, AnimatePresence, Reorder } from 'framer-motion';
import TrackList from "./ListedTracks";

function PlaylistEditorWrapper(props){
    
    return(
		<AnimatePresence>
        <div className="fixed z-20 w-full h-full flex items-center justify-center">
            <div className="w-10/12 h-3/4 px-4 py-4 bg-slate-800 drop-shadow-lg overflow-hidden">
                <div className="cursor-pointer fixed right-4 text-teal-500 text-2xl"
                onClick={props.closeEditor}
                >X</div>
                <h1 className=" px-1 text-teal-500 text-3xl text-left">Edit Playlists</h1>
                <p className=" px-1 text-teal-500 text-lg text-left italic">Drag tracks to rearrange them</p>
                <span className="flex flex-row justify-around">
                    {props.playlistData.map( playlist =><span key={playlist.id} className="px-2 basis-1/2 flex flex-col">
                        <p className="p-2 text-left text-2xl text-white bg-slate-700 rounded-md">{playlist.name}</p>
                        <span className="h-2/5 py-2">
                            <TrackList tracks={playlist.tracks}/>
                        </span>
                    </span>)}
                </span>
            </div>
        </div>
        <div className="fixed z-10 w-full h-full bg-slate-900 opacity-80" />
		</AnimatePresence>
    );
}

export default PlaylistEditorWrapper;