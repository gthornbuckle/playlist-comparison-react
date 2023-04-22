import React from "react";
import { motion } from 'framer-motion';
import DeleteButton from "../Buttons/DeleteButton"
import AddTrackButton from "../Buttons/AddTrackButton";
import SaveButton from "../Buttons/SaveButton";

function ButtonMenu(props){

    return(
        <div className="basis-1/5 pl-2 flex flex-row items-center">
            <AddTrackButton
                addTrack={props.displayAdder}
            />  
            <DeleteButton
            displayEditor={props.displayEditor}
            />
            <SaveButton/>
        </div>
    );
}

export default ButtonMenu;