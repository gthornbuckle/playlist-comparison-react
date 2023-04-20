import React from "react";
import { motion } from 'framer-motion';
import AddButton from './Buttons/AddPlaylistButton'
import EditButton from "./Buttons/EditButton";

function Menu(props){

    return(
        <div className="fixed z-10 top-0 left-0 right-0 px-2 py-2 flex flex-row">
            <AddButton/>  
            <EditButton 
            displayEditor={props.displayEditor}
            />
        </div>
    );
}

export default Menu;