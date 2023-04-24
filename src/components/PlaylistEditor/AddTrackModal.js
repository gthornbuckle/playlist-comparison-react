import { React, useState, useEffect } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import CloseButton from "../Buttons/CloseButton";

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

const modal = {
    visible: {
        y: 0,
        opacity: 1

    },
    hidden: {
        y: 1000,
        opacity: 0
    }
}

const initialValues ={
    name: "",
    durationMin: "",
    durationSec:"",
    artist: "",
    artwork: "",
    url: "",
    trackNumber: ""
}

function AddTrackModal(props){
    const [userInput, setUserInput] = useState(initialValues);
    const [invalidWarning, setInvalidWarning] = useState(false);
    const [invalidInput, setInvalidInput] = useState("");

    const handleInputChange = e =>{
        const {name, value} = e.target;
        setUserInput({
            ...userInput,
            [name]: value,
        });
    }

    const formValidation = input =>{
        if(input.trackNumber === ""){
            setInvalidInput("track number");
            setInvalidWarning(true);
        }else if (input.name === ""){
            setInvalidInput("track name");
            setInvalidWarning(true);
        }else if (input.durationMin === "" || input.durationSec === ""){
            setInvalidInput("track duration");
            setInvalidWarning(true);
        }else if (input.artist === ""){
            setInvalidInput("artist");
            setInvalidWarning(true);
        }else{
            props.addTrack(userInput, props.currentPlaylist);
            props.closeModal();
        }
    }
    
    return(
        <motion.div>
        <div className="fixed z-40 w-full h-full flex items-center justify-center">
            <motion.div className="w-8/12 min-h-fit p-4 bg-slate-800 drop-shadow-lg"
                variants={modal}
                initial={"hidden"}
                animate={"visible"}
                exit={"hidden"}
                transition={{type: "spring", bounce: 0.4, duration: 0.6}}
            >
            <CloseButton closeEditor={props.closeModal}/>
                <h2 className=" px-1 text-teal-500 text-3xl text-left">Add Track</h2>
                <span className="py-1 flex flex-col">
                    <span className="flex flex-row space-x-4">
                        <input className={inputStyle}
                            style={{width: "4rem"}}
                            placeholder="No." 
                            type="text" 
                            name="trackNumber"
                            label="Track Posistion in Playlist"
                            value={userInput.trackNumber} 
                            onChange={handleInputChange}
                        >
                        </input>
                        <input className={inputStyle}
                            placeholder="Enter track name..." 
                            type="text" 
                            name="name"
                            label="Track Name"
                            value={userInput.name}
                            onChange={handleInputChange}
                        >
                        </input>
                        <span className="flex flex-row items-center">
                            <input className={inputStyle}
                                style={{width: "4rem", textAlign: "right"}}
                                placeholder="0" 
                                type="text" 
                                maxLength="3"
                                name="durationMin"
                                label="Duration Minutes"
                                value={userInput.durationMin} 
                                onChange={handleInputChange}
                            >
                            </input>
                            <label className="px-2 pt-3 text-white text-2xl text-center self-center">:</label>
                            <input className={inputStyle}
                                style={{width: "6rem"}}
                                placeholder="00" 
                                type="text"
                                maxLength="2"
                                name="durationSec"
                                label="Duration Seconds"
                                value={userInput.durationSec}
                                onChange={handleInputChange}
                            >
                            </input>
                        </span>
                    </span>
                    <input className={inputStyle}
                        placeholder="Enter artist..." 
                        type="text"
                        name="artist"
                        label="Track Artist"
                        value={userInput.artist} 
                        onChange={handleInputChange}
                    >
                    </input>
                    <input className={inputStyle}
                        placeholder="Enter artwork url... (optional)" 
                        type="text"
                        name="artwork"
                        label="Track Artwork URL"
                        value={userInput.artwork} 
                        onChange={handleInputChange}
                    >
                    </input>
                    <input className={inputStyle}
                        placeholder="Enter track link... (optional)" 
                        type="text"
                        name="url"
                        label="External Link to Track"
                        value={userInput.url} 
                        onChange={handleInputChange}
                    >
                    </input>
                    <span className="flex flex-row items-center justify-end">
                            {invalidWarning &&(
                                <motion.p className="text-pink-500 text-lg absolute left-4 bottom-7"
                                    key={invalidInput}
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1, x: [0, 5, 0, -5, 0],}}
                                    exit={{opacity: 0}}
                                    transition={{
                                        x:{
                                        duration: 0.3,
                                        repeat: 2,
                                        ease: "linear"
                                        }
                                    }}
                                >
                                    Please enter a valid {invalidInput}
                                </motion.p>
                            )}
                        <motion.button className="p-2 mt-4 w-1/6 text-white bg-teal-500 text-lg text-center self-end rounded-md"
                            whileHover={{backgroundColor: "#ec4899"}}
                            whileTap={{scale: 0.8}}
                            // onClick={() =>{props.addTrack(userInput, props.currentPlaylist); props.closeModal()}}
                            onClick={() =>{formValidation(userInput)}}
                        >Add</motion.button>
                    </span>
                </span>
            </motion.div>
        </div>
        <motion.div 
            className="fixed z-30 w-full h-full bg-slate-900 opacity-80"
            variants={container}
            initial={"hidden"}
            animate={"visible"}
            exit={"hidden"}
            transition={{ duration: 0.8}}
            />
        </motion.div>
    );
}

export default AddTrackModal;