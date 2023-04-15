import React from "react";
import format from 'format-duration';
import { motion, AnimatePresence } from 'framer-motion'

let themeColour = 1;

const getStyle = (theme, duration) =>{
    if (themeColour === 0){
        themeColour = 1;
    }else if(themeColour === 1){
        themeColour = 0;
    }

    return {width: `${Math.round(duration/1000)}px`,
            backgroundColor: theme[themeColour]}
}

const toggleOpen = bool =>{
    switch (bool){
        case true:
            return {
                position: "fixed",
                height: 500,
                width: 500,
                zIndex: 10
            };
        case false:
            return {
                position: "relative",
                height: 200
            }
    }
}

function TrackBlock(props){

    // props.displayData([props.name, props.artists, props.duration, props.url, props.artwork]);
    
    return (
            <motion.div className="h-[200px]" onClick={() =>{props.expandinfo([props.name, props.artists.join(' & '), props.duration, props.url, props.artwork])}}>
                <motion.div className="h-full text-white" style={getStyle(props.playlistTheme, props.duration)} 
                onClick={props.expand}>
                    <motion.div className="pl-5 pt-2 flex flex-col items-start text-left font-sans font-bold z-10 whitespace-nowrap overflow-hidden">
                        <motion.p className="text-2xl">{props.name}</motion.p>
                        <motion.p className="text-md">{props.artists.join(' & ')}</motion.p>
                        <motion.p className="text-4xl">{format(props.duration)}</motion.p>
                    </motion.div>
                    <motion.div className="h-full bg-cover bg-center opacity-10 z-0 absolute top-0 grayscale" style= {{backgroundImage: `url(${props.artwork})`, width: `${Math.floor(props.duration/1000)}px`}}></motion.div>
                </motion.div>
            </motion.div>

    )
}

export default TrackBlock;