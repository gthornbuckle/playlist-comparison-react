import { React, useState } from "react";
import { motion } from 'framer-motion';

const variants = {
    hover: {
        stroke: "#ec4899",
        rotate: [0, 20, 0, -20, 0],
        transition: {
            rotate: {
                repeat: Infinity,  
                duration: 0.8,
                ease: "linear"
            }
        }
    },
    initial: { 
        stroke: "#14b8a6"
    }
}

function AddTrackButton(props){
    const [isHovered, setHover] = useState(false);
    
    return (
        <motion.div className="cursor-pointer px-1" onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} 
            onClick={props.addTrack}
        >
            <motion.svg width="24" height="24" viewBox="0 0 7.13 7.13" stroke="#ec4899" strokeWidth="1" strokeLinecap="flat" fill="none"
                initial={false}
                animate={isHovered ? "hover" : "initial"}
                variants={variants}
            >
                <motion.line className="cls-1" x1="0.5" y1="3.56" x2="6.63" y2="3.56"/>
                <motion.line className="cls-1" x1="3.56" y1="6.63" x2="3.56" y2="0.5"/>
            </motion.svg>
        </motion.div>
    )
}

export default AddTrackButton;