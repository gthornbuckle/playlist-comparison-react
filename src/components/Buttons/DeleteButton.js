import { React, useState } from "react";
import { motion } from 'framer-motion';

const variants = {
    hover: {
        stroke: "#ec4899"
    },
    initial: { 
        stroke: "#14b8a6"
    }
}

const lidVariants = {
    hover: {
        stroke: "#ec4899",
        rotate: 45,
        y: -6,
        x: 5
    },
    initial: { 
        stroke: "#14b8a6",
        rotate: 0,
        y: 0,
        x: 0
    }
}

function DeleteButton(props){
    const [isHovered, setHover] = useState(false);
    
    return (
        <motion.div className="cursor-pointer px-2" onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}
            onClick={() =>{props.deletePlaylist(props.playlistID)}}
        >
            <motion.svg className="relative -top-0.1" width="20" height="20" viewBox="0 0 18.76 6.03" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" fill="none"
                initial={false}
                animate={isHovered ? "hover" : "initial"}
                variants={lidVariants}
            >
                <polygon className="cls-1" points="1.95 2.14 16.81 2.14 18.26 5.53 0.5 5.53 1.95 2.14"/>
                <rect className="cls-1" x="7.15" y="0.5" width="4.46" height="1.64"/>
            </motion.svg>
            <motion.svg className="relative -top-2" width="20" height="20" viewBox="0 0 16.8 19.06" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" fill="none"
                initial={false}
                animate={isHovered ? "hover" : "initial"}
                variants={variants}
            >
                <rect className="cls-1" x="0.5" y="0.5" width="15.8" height="18.06"/>
                <line className="cls-2" x1="8.4" y1="3.92" x2="8.4" y2="15.53"/>
                <line className="cls-2" x1="4.4" y1="3.92" x2="4.4" y2="15.53"/>
                <line className="cls-2" x1="12.4" y1="3.92" x2="12.4" y2="15.53"/>
            </motion.svg>
        </motion.div>
    )
}

export default DeleteButton;