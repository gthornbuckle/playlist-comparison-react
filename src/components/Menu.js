import React from "react";
import { motion } from 'framer-motion';
import AddButton from './Buttons/AddButton'
import EditButton from "./Buttons/EditButton";

function Menu(props){

    return(
        <div className="fixed top-0 left-0 right-0 px-2 py-2 flex flex-row">
            <AddButton/>  
            <EditButton/>
        </div>
    );
}

export default Menu;