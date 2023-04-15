import React from "react";
import format from 'format-duration';
import { motion } from 'framer-motion'

const getStyle = (theme, duration, index) =>{
    const isOdd = num =>{
        return num % 2;
    }

    return {
        width: `${Math.round(duration/1000)}px`,
        backgroundColor: theme[isOdd(index)],
        color: theme[isOdd(index)]
    }
}

function TrackBlock(props){
    
    return (
            <motion.div className="h-[200px] cursor-pointer" onClick={() =>{props.expandinfo([props.name, props.artists.join(' & '), props.duration, props.url, props.artwork])}}>
                <motion.div className="h-full relative" style={getStyle(props.playlistTheme, props.duration, props.trackIndex)} 
                onClick={props.expand}>
                    <motion.div className="h-full bg-cover bg-center opacity-10 absolute top-0 grayscale" style= {{backgroundImage: `url(${props.artwork})`, width: `${Math.floor(props.duration/1000)}px`}}></motion.div>
                    <motion.div className="overflow-hidden">
                        <motion.div className="pl-5 pt-2 flex flex-col items-start text-left font-bold tracking-wide absolute whitespace-normal invert saturate-200">
                            <motion.p className="text-2xl">{props.name}</motion.p>
                            <motion.p className="text-md">{props.artists.join(' & ')}</motion.p>
                            <motion.p className="text-4xl">{format(props.duration)}</motion.p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
    )
}

export default TrackBlock;