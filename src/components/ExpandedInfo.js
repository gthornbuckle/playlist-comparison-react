import React from "react";
import { motion } from 'framer-motion'
import format from 'format-duration';
import Animatedlink from './AnimatedLink';
import HideIcon from './HideIcon';

const variants = {
    visible: {
        opacity: 1,
        left: "2.5rem"
    },
    hidden: {
        opacity: 0,
        left: "-500px"
    }
}

function ExpandedInfo(props){

    return(
        <motion.div className="fixed bottom-10 left-10 h-96 w-96 bg-pink-500 drop-shadow-lg bg-contain flex items-end"
            style={{backgroundImage: `url(${props.data[4]})`}}
            variants={variants}
            initial={"hidden"}
            animate={"visible"}
            exit={"hidden"}
            transition={{easeInOut: "linear", duration: 0.4}}>
                <HideIcon click={props.setVisible}/>
                <motion.div className="h-300 w-full pl-4 pb-2 flex flex-col items-start justify-items-end text-white text-left bg-black/70 text-lg overflow-hidden">
                    <motion.p className="text-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}>{props.data[0]} - {props.data[1]}</motion.p>
                    <motion.p className="text-xl">{format(props.data[2])}</motion.p>
                    <Animatedlink url={props.data[3]}/>
                </motion.div>
		</motion.div>
    );
}

export default ExpandedInfo;