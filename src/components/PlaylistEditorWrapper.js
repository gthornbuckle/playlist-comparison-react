import { React, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import ShuffleTheme from './Themes';

const themes = ShuffleTheme();

function PlaylistEditorWrapper(props){
    
    return(
		<AnimatePresence>
        <div className="fixed z-20 w-full h-full flex items-center justify-center">
            <div className="w-10/12 h-3/4 bg-slate-800 drop-shadow-lg">
                <span className="flex flex-row">
                    <span className="flex flex-col">
                        <p>{props.playlistData[0].name}</p>
                    </span>
                </span>
            </div>
        </div>
        <div className="fixed z-10 w-full h-full bg-slate-900 opacity-80" />
		</AnimatePresence>
    );
}

export default PlaylistEditorWrapper;