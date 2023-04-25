import React from "react";
import { motion } from 'framer-motion'
import format from 'format-duration';
import Animatedlink from './Buttons/AnimatedLink';
import HideIcon from './Buttons/HideIcon';
import defaultart from '../defaultartwork.png'

const container = {
    visible: {
        opacity: 1,
        left: "2.5rem",
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.5
        }
    },
    hidden: {
        opacity: 0,
        left: "-500px"
    }
}

const children = {
    visible: {
        opacity: 1
    },
    hidden: {
        opacity: 0
    }
}

function ExpandedInfo(props){

    return(
        <motion.div className="fixed bottom-10 left-10 h-96 w-96 bg-pink-500 drop-shadow-lg bg-contain flex items-end"
            style={{backgroundImage: `url(${defaultart})`}}
            variants={container}
            initial={"hidden"}
            animate={"visible"}
            exit={"hidden"}
            transition={{ease: "backInOut", duration: 1}}>
                <HideIcon click={props.setVisible} 
                variants={children}/>
                <motion.div className="h-300 w-full pl-4 pb-2 flex flex-col justify-items-end text-white text-left bg-black/70 text-lg overflow-hidden"
                variants={children}>
                    <motion.p className="text-xl" variants={children}>{props.data[0]} - {props.data[1]}</motion.p>
                    <motion.p className="text-xl" variants={children}>{format(props.data[2])}</motion.p>
                    <Animatedlink url={props.data[3]} variants={children}/>
                </motion.div>
                <motion.div className="fixed -z-10 h-96 w-96 bg-contain"
                    style={{backgroundImage: `url(${props.data[4]})`}}
                >
                    </motion.div>
		</motion.div>
    );
}

export default ExpandedInfo;