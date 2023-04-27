import { React, useState } from "react";
import { motion } from 'framer-motion';

const variants = {
    hover: {
        stroke: "#ec4899",
        y: [0, -10, 0],
        transition: {
            y: {
                repeat: Infinity,  
                duration: 0.5,
                ease: "linear"
            }
        }
    },
    initial: { 
        stroke: "#14b8a6"
    }
}

function SaveButton(props){
    const [isHovered, setHover] = useState(false);
    
    return (
        <motion.div className="cursor-pointer px-2" onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} 
            onClick={props.addTrack}
        >
            <motion.svg width="40" height="40" viewBox="0 0 20.48 20.52" stroke="#ec4899" strokeWidth="1" strokeLinecap="flat" fill="none"
                initial={false}
                animate={isHovered ? "hover" : "initial"}
                variants={variants}
            >
                <path className="cls-1" d="M.5.5H17l3,3V20H.5Z"/>
                <rect className="cls-2" x="4.17" y="9.84" width="12.13" height="10.18"/>
                <rect className="cls-2" x="4.17" y="0.56" width="10.09" height="6.52"/>
                <rect className="cls-2" x="10.24" y="0.5" width="2.06" height="3.63"/>
            </motion.svg>
        </motion.div>
    )
}

export default SaveButton;