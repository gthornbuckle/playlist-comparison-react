import React from "react";
import { motion } from 'framer-motion';
import DeleteButton from "../Buttons/DeleteButton"
import AddTrackButton from "../Buttons/AddTrackButton";
import SaveButton from "../Buttons/SaveButton";

function ButtonMenu(props){

    return(
        <div className="basis-1/5 pl-2 flex flex-row items-center">
            <motion.button className="w-[50px] h-[50px]" onClick={props.displayAdder}>
                <AddTrackButton/> 
            </motion.button>
            <motion.button className="w-[50px] h-[50px]" onClick={props.deleteModal}>
                <DeleteButton/>
            </motion.button>
            <motion.button className="w-[50px] h-[50px]" onClick={() =>{props.updateTrackOrder(props.reorderData, props.currentPlaylist.id)}}>
                <SaveButton/>
            </motion.button>
        </div>
    );
}

export default ButtonMenu;