import { React, useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import CloseButton from "./Buttons/CloseButton";
import { spotifySearch } from './API'

const inputStyle = `mt-4 placeholder:text-slate-400 block
bg-slate-700 w-full border border-slate-700 rounded-md py-2 px-2 shadow-sm focus:outline-none
focus:border-teal-500 focus:ring-teal-500 focus:ring-1 sm:text-md text-teal-500
selection:bg-teal-300 selection:text-teal-900`

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

const loadingContainer = {
    animate: {
        transition:{
            staggerChildren: 0.1
        }
    }
}

const loadingChildren = {
    initial: {
        y: 0,
        scale: 1
    },
    animate: {
        y: [0, 5, 0, -5, 0],
        scale: [1, 1.2, 1, 0.8, 1]
    }
}

const loadingTransistion = {
    duration: 0.5,
    repeat: Infinity,
    ease: "easeInOut"
}

function AddPlaylistWrapper(props){
    const [userInput, setUserInput] = useState("");
    const [isLoading, setLoading] = useState(false);

    const getPlaylist = async query =>{
        if(query.includes('spotify')){
            console.log("Spotify link detected");

            let playlistId = query.split('/playlist/').pop();
            if (playlistId.length > 22){
                playlistId = playlistId.slice(0, -20); 
            }

            let responseData = {};

            try{
                responseData = await spotifySearch(playlistId);
            } catch (err) {
                console.log(err);
            } finally {
                props.passPlaylistData(responseData);
                setLoading(false);
            }
        }

    }
    
    return(
        <motion.div>
        <div className="fixed z-20 w-full h-full flex items-center justify-center">
            <motion.div 
                className="w-10/12 min-h-fit px-4 py-4 bg-slate-800 drop-shadow-lg overflow-y-auto"
                variants={editor}
                initial={"hidden"}
                animate={"visible"}
                exit={"hidden"}
                transition={{type: "spring", bounce: 0.4, duration: 0.6}}
            >
                <CloseButton closeEditor={props.closeAdder} initial={props.initial}/>
                <h1 className=" px-1 text-teal-500 text-3xl text-left">Add Playlist</h1>
                <p className=" px-1 text-slate-400 text-lg text-left">Enter a valid Spotify playlist url.</p>
                <input className={inputStyle}
                        placeholder="Enter playlist url..." 
                        type="text"
                        name="playlist"
                        value={userInput} 
                        onChange={e => setUserInput(e.target.value)}
                >
                </input>
                {!isLoading &&(
                    <div className="flex flex-row justify-end">
                        <motion.button className="p-2 mt-4 w-36 text-white bg-teal-500 text-lg text-center rounded-md"
                            whileHover={{backgroundColor: "#ec4899"}}
                            whileTap={{scale: 0.8}}
                            onClick={() =>{getPlaylist(userInput); setLoading(true)}}
                        >Add Playlist</motion.button>
                    </div>
                )}
                {isLoading &&(
                <div className="flex flex-row items-center justify-end">
                    <motion.div className="p-4 mt-4 w-36 flex flex-row items-center justify-center bg-teal-500 rounded-md"
                        variants={loadingContainer}
                        inital="inital"
                        animate="animate"
                    >
                        <motion.span className="mx-1 block w-2 h-2 bg-white rounded-full"
                            variants={loadingChildren}
                            transition={loadingTransistion}
                        ></motion.span>
                        <motion.span className="mx-1 block w-2 h-2 bg-white rounded-full"
                             variants={loadingChildren}
                             transition={loadingTransistion}
                        ></motion.span>
                        <motion.span className="mx-1 block w-2 h-2 bg-white rounded-full"
                            variants={loadingChildren}
                            transition={loadingTransistion}
                        ></motion.span>
                    </motion.div>
                </div>
                )}
            </motion.div>
        </div>
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

export default AddPlaylistWrapper;