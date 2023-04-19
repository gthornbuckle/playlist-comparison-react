import React from "react";
import { motion } from 'framer-motion';
import AddButton from './Buttons/AddButton'
import EditButton from "./Buttons/EditButton";

function Menu(props){

    return(
        <div className="fixed z-30 top-0 left-0 right-0 px-2 py-2 flex flex-row">
            <AddButton/>  
            <EditButton 
            displayEditor={props.displayEditor}
            editorActive={props.editorActive}/>
        </div>
    );
}

export default Menu;