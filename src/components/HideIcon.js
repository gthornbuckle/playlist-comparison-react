import { React, useState } from "react";
import { motion } from 'framer-motion'

const variants = {
    visible: {
        width: 40,
        height: 40,
        stroke: "#ec4899"
    },
    hidden: { 
        width: 30,
        height: 30,
        stroke: "#14b8a6"
    }
}

const lineVariants = {
    visible: {
        opacity: 1, 
        pathLength: 1,
        pathOffset: 0,
    },
    hidden: {
        opacity: 0, 
        pathLength: 0,
        pathOffset: 1
    }
}

function HideIcon(props){
    const [isHovered, setHover] = useState(false);
    
    return (
        <motion.div className="cursor-pointer"
            onClick={props.click}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}>
            <motion.div className="absolute bottom-1 right-2 z-20">
                <motion.svg width="40" height="40" viewBox="0 0 20.21 20.21" stroke="#ec4899" stroke-width="1.5" stroke-linecap="round" fill="none">
                    <motion.line class="cls-1" x1="1" y1="19.21" x2="19.21" y2="1"
                    initial={false}
                    animate={isHovered ? "visible" : "hidden"}
                    variants={lineVariants}
                    />
                </motion.svg>
            </motion.div>
            <motion.div className="absolute bottom-1 right-2 z-10">
                <motion.svg viewBox="0 0 26.96 18.33" stroke-width="1.5" fill="none"
                initial={false}
                animate={isHovered ? "visible" : "hidden"}
                variants={variants}>
                    <motion.path class="cls-1" d="M26.36,9.16s-5.77,8.67-12.88,8.67S.6,9.16.6,9.16,6.37.5,13.48.5,26.36,9.16,26.36,9.16Z"/>
                    <motion.circle class="cls-1" cx="13.48" cy="9.16" r="5.11"/>
                </motion.svg>
            </motion.div>
        </motion.div>
    )
}

export default HideIcon;