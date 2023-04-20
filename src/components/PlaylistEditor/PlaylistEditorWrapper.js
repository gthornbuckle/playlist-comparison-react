import { React, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import TrackList from "./ListedTracks";
import CloseButton from "../Buttons/CloseButton";
import DeleteButton from "../Buttons/DeleteButton"
import AddTrackButton from "../Buttons/AddTrackButton";
import AddTrackModal from "./AddTrackModal";

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

function PlaylistEditorWrapper(props){
    const [modalVisible, setModalVisible] = useState(false);
    
    return(
        <motion.div>
        <div className="fixed z-20 w-full h-full flex items-center justify-center">
            <motion.div 
                className="w-10/12 h-3/4 px-4 py-4 bg-slate-800 drop-shadow-lg overflow-y-auto"
                variants={editor}
                initial={"hidden"}
                animate={"visible"}
                exit={"hidden"}
                transition={{type: "spring", bounce: 0.4, duration: 0.6}}
            >
                <CloseButton closeEditor={props.closeEditor}/>
                <h1 className=" px-1 text-teal-500 text-3xl text-left">Edit Playlists</h1>
                <p className=" px-1 text-slate-400 text-lg text-left italic">Drag tracks to rearrange them</p>
                <span className="py-4 flex flex-row justify-around">
                    {props.playlistData.map( playlist =><span key={playlist.id} className="px-2 basis-0 grow flex flex-col">
                        <div className="flex flex-row justify-between bg-slate-700 rounded-md">
                            <p className="p-2 text-left text-2xl text-white">{playlist.name}</p>
                            <div>
                                <AddTrackButton addTrack={() =>{setModalVisible(true)}}/>
                                <DeleteButton />
                            </div>
                        </div>
                        <span className="py-2">
                            <TrackList tracks={playlist.tracks}/>
                        </span>
                    </span>)}
                </span>
                <div className="px-2 flex flex-row justify-end">
                    <motion.button className="p-2 text-white bg-teal-500 text-lg text-center"
                        whileHover={{backgroundColor: "#ec4899"}}
                        whileTap={{scale: 0.8}}
                    >Save Changes</motion.button>
                </div>
            </motion.div>
        </div>
        <AnimatePresence>
            {modalVisible &&(
            <AddTrackModal
            closeModal={() =>{setModalVisible(false)}}/>
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

export default PlaylistEditorWrapper;