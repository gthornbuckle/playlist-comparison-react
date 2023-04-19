import { React, useState } from "react";
import { motion } from 'framer-motion'
import gearIcon from './ButtonAssets/gear.svg'

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
                duration: 0.2
            }
        }
    }
}

const gearVariants ={
    initial: {
        rotate: 0
    },
    hover: { 
        rotate: 360,
        transition: {
                repeat: Infinity, 
                repeatType: "loop", 
                duration: 1,
                ease: "linear"
        }
    }
}

// let buttonEnabled = {};

// const checkEnabled = bool =>{
//     switch(bool){
//         case true: buttonEnabled = {
//             cursor: "pointer"
//         }
//         case false: buttonEnabled = {
//             pointerEvents: "none",
//             opacity: 0.5
//         }
//         default: buttonEnabled = {
//             cursor: "pointer"
//         }
//     }
// }

function EditButton(props){
    const [isHovered, setHover] = useState(false);
    
    return (
        <div className="px-3 cursor-pointer" onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}
        onClick={props.displayEditor}
        >
            <motion.p className="text-teal-500 text-2xl pl-11"
            initial={false}
            animate={isHovered ? "hover" : "initial"}
            variants={textHoverColour}>Edit Playlists</motion.p>
            <motion.div className="absolute top-2">
                <motion.svg className="absolute" width="32" height="32" viewBox="0 0 20.48 20.48" stroke="#14b8a6" strokeWidth="1" strokeLinecap="round" fill="none">
                    <motion.path className="cls-1" d="M6.56.5H17a3,3,0,0,1,3,3V16.91A3.06,3.06,0,0,1,16.91,20H3.56A3.06,3.06,0,0,1,.5,16.91V6.56"/>
                </motion.svg>
                <motion.svg className="absolute left-1 top-0.5" width="26" height="26" viewBox="0 0 11.69 17.17" stroke="#14b8a6" strokeWidth="1" strokeLinecap="round" fill="none"
                initial={false}
                animate={isHovered ? "hover" : "initial"}
                variants={noteVariants}>
                    <motion.circle className="cls-1" cx="3.48" cy="13.69" r="2.98"/>
                    <motion.path className="cls-2" d="M6.45,13.69V.5s1.74,4.74,4.74,4.74"/>
                </motion.svg>
                <motion.img src={gearIcon} alt="gear" className="w-[10px] h-[10px]"
                initial={false}
                animate={isHovered ? "hover" : "initial"}
                variants={gearVariants}/>
            </motion.div>
        </div>
    )
}

export default EditButton;