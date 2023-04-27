import { React, useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import TrackList from "./ListedTracks";
import CloseButton from "../Buttons/CloseButton";
import AddTrackModal from "./AddTrackModal";
import DropdownMenu from "./DropdownMenu";
import ButtonMenu from "./ButtonMenu";
import ConfirmationModal from "./ConfirmationModal"

const container = {
    visible: {
        opacity: 0.8,
    },
    hidden: {
        opacity: 0,
    }
}

const editor = {
    visible: {
        y: 0,
        opacity: 1

    },
    hidden: {
        y: -500,
        opacity: 0
    }
}

function PlaylistEditorWrapperDropdown(props){
    const [addTrackModalVisible, setaddTrackModalVisible] = useState(false);
    const [confirmationModalVisible, setconfirmationModalVisible] = useState(false);
    const [selectedPlaylist, setSelectedPlaylist] = useState(props.playlistData[0]);
    const [reorderData, setReorderData] = useState([]);

    const getNewTrackOrder = data => {
        setReorderData(data);
    }

    const handleChange = name =>{
        let selected = props.playlistData.filter(e =>{
            return e.name === name});

        setSelectedPlaylist(selected[0]);
    }

    if(props.playlistData.find(e => e.id === 'initialplaylist')){
		return;
	}

    return(
        <motion.div>
        <div className="fixed z-20 w-full h-full flex items-center justify-center">
            <motion.div 
                className="w-10/12 h-fit shrink px-4 py-4 bg-slate-800 drop-shadow-lg overflow-y-none"
                variants={editor}
                initial={"hidden"}
                animate={"visible"}
                exit={"hidden"}
                transition={{type: "spring", bounce: 0.2, duration: 0.6}}
            >
                <CloseButton closeEditor={props.closeEditor}/>
                <h1 className=" px-1 text-teal-500 text-3xl text-left">
                    Edit Playlists
                </h1>
                <p className=" px-1 py-2 text-slate-400 text-lg text-left">
                    Select a playlist to modify. Add or delete tracks and drag to change order, save to apply new order.
                </p>
                <span className="flex flex-row items-center justify-center">
                    <DropdownMenu 
                        playlistData={props.playlistData}
                        handleChange={handleChange}
                    />
                    <div>
                        <ButtonMenu
                            displayAdder={() =>{setaddTrackModalVisible(true)}}
                            deleteModal={() =>{setconfirmationModalVisible(true)}}
                            currentPlaylist={selectedPlaylist}
                            updateTrackOrder={props.updateOrder}
                            reorderData={reorderData}
                        />
                    </div>
                </span>
                <span className="pt-2">
                    <TrackList
                        key={selectedPlaylist.tracks}
                        tracks={selectedPlaylist.tracks}
                        newOrder={getNewTrackOrder}
                    />
                </span>
            </motion.div>
        </div>
        <AnimatePresence>
            {addTrackModalVisible &&(
            <AddTrackModal
                closeModal={() =>{setaddTrackModalVisible(false)}}
                addTrack={props.handleAddTrack}
                currentPlaylist={selectedPlaylist.id}
            />
            )}
        </AnimatePresence>
        <AnimatePresence>
            {confirmationModalVisible &&(
            <ConfirmationModal
                closeModal={() =>{setconfirmationModalVisible(false)}}
                currentPlaylist={selectedPlaylist}
                deletePlaylist={props.handleDeletePlaylist}
            />
            )}
        </AnimatePresence>
        <motion.div 
            className="fixed z-10 w-full h-full bg-slate-900 opacity-80"
            variants={container}
            initial={"hidden"}
            animate={"visible"}
            exit={"hidden"}
            transition={{ duration: 0.8}}
        />
        </motion.div>
    );
}

export default PlaylistEditorWrapperDropdown;