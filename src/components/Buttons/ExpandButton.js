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

function ExpandButton(props){
    const [isHovered, setHover] = useState(false);
    
    return (
        <motion.div onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
            <motion.svg width="20" height="20" viewBox="0 0 18.92 10" stroke="#14b8a6" strokeWidth="3" strokeLinecap="round" fill="none">
                <motion.polyline className="cls-1" points="0.5 0.5 9.46 9.5 18.42 0.5"/>
            </motion.svg>
        </motion.div>
    )
}

export default ExpandButton;