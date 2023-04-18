import { React, useState } from "react";
import { motion } from 'framer-motion'

const variants = {
    visible: {
        color: "#ec4899",
        fontSize: "1.5rem"
    },
    hidden: {
        color: "#14b8a6",
        fontSize: "1rem"
    }
}

function Animatedlink(props){
    const [isHovered, setHover] = useState(false);
    
    return (
        <motion.a className=" font-bold underline decoration-wavy decoration-2 w-fit" href={props.url}
        initial={false}
        animate={isHovered ? "visible" : "hidden"}
        variants={variants}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)} >Listen</motion.a>
    )
}

export default Animatedlink;