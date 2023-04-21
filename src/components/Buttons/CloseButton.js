import { React, useState } from "react";
import { motion } from 'framer-motion';

const variants = {
    visible: {
        stroke: "#ec4899"
    },
    hidden: { 
        stroke: "#14b8a6"
    }
}

const checkInitial = bool =>{
    const closeStyle = bool ? {display: "none"} : {display: "block"};
    return closeStyle;
}

function CloseButton(props){
    const [isHovered, setHover] = useState(false);
    
    return (
        <motion.div className="fixed right-2 cursor-pointer px-3" onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} 
            onClick={props.closeEditor}
            whileTap={{scale: 0.8}}
            style={checkInitial(props.initial)}
        >
            <motion.svg width="20" height="20" viewBox="0 0 5.75 5.75" stroke="#ec4899" strokeWidth="1" strokeLinecap="round" fill="none">
                <motion.line 
                    className="cls-1" x1="5.04" y1="5.04" x2="0.71" y2="0.71"
                    initial={false}
                    animate={isHovered ? "visible" : "hidden"}
                    variants={variants}
                />
                <motion.line 
                    className="cls-1" x1="5.04" y1="0.71" x2="0.71" y2="5.04"
                    initial={false}
                    animate={isHovered ? "visible" : "hidden"}
                    variants={variants}
                />
            </motion.svg>
        </motion.div>
    )
}

export default CloseButton;