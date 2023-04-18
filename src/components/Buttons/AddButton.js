import { React, useState } from "react";
import { motion } from 'framer-motion';

const textHoverColour = {
    initial: {
        color: "#14b8a6"
    },
    hover: { 
        color: "#ec4899"
    }
}

const noteVariants = {
    initial: {
        stroke: "#14b8a6",
        rotate: 0
    },
    hover: { 
        stroke: "#ec4899",
        rotate: 15,
        transition: {
            rotate: {
                repeat: Infinity, 
                repeatType: "reverse", 
                duration: 0.2,
                ease: "linear"
            }
        }
    }
}

const plusVariants ={
    initial: {
        scale: 1
    },
    hover: { 
        scale: 1.3,
        transition: {
                repeat: Infinity, 
                repeatType: "reverse", 
                duration: 0.5
        }
    }
}

function AddButton(){
    const [isHovered, setHover] = useState(false);
    
    return (
        <div className="cursor-pointer px-3" onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
            <motion.p className="text-teal-500 text-2xl pl-11 justify-end"
            initial={false}
            animate={isHovered ? "hover" : "initial"}
            variants={textHoverColour}>Add Playlist</motion.p>
            <motion.div className="absolute top-2">
                <motion.svg className="absolute" width="32" height="32" viewBox="0 0 20.48 20.48" stroke="#14b8a6" strokeWidth="1" strokeLinecap="round" fill="none">
                    <motion.path class="cls-1" d="M6.56.5H17a3,3,0,0,1,3,3V16.91A3.06,3.06,0,0,1,16.91,20H3.56A3.06,3.06,0,0,1,.5,16.91V6.56"/>
                </motion.svg>
                <motion.svg className="absolute left-1 top-0.5" width="26" height="26" viewBox="0 0 11.69 17.17" stroke="#14b8a6" strokeWidth="1" strokeLinecap="round" fill="none"
                initial={false}
                animate={isHovered ? "hover" : "initial"}
                variants={noteVariants}>
                    <motion.circle class="cls-1" cx="3.48" cy="13.69" r="2.98"/>
                    <motion.path class="cls-2" d="M6.45,13.69V.5s1.74,4.74,4.74,4.74"/>
                </motion.svg>
                <motion.svg className="absolute" width="15" height="15" viewBox="0 0 10 10" stroke="#14b8a6" strokeWidth="1" strokeLinecap="round" fill="none"
                initial={false}
                animate={isHovered ? "hover" : "initial"}
                variants={plusVariants}>
                    <motion.line class="cls-1" x1="0.5" y1="3.56" x2="6.63" y2="3.56"/><line class="cls-1" x1="3.56" y1="6.63" x2="3.56" y2="0.5"/>
                </motion.svg>
            </motion.div>
        </div>
    )
}

export default AddButton;