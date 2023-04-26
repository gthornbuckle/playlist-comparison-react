import  React  from "react";
import { motion } from 'framer-motion';

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

function PlaylistExistsModal(props){

    return(
        <motion.div>
        <div className="fixed z-40 w-full h-full flex items-center justify-center">
            <motion.div className="w-[32rem] h-48 min-h-fit p-6 bg-slate-800 drop-shadow-lg flex flex-col justify-between"
                variants={modal}
                initial={"hidden"}
                animate={"visible"}
                exit={"hidden"}
                transition={{type: "spring", bounce: 0.4, duration: 0.6}}
            >
                <span className="py-1 flex flex-col">
                    <p className="py-2 text-slate-400 text-xl">Playlist already exists.</p>
                    <span className="py-8 flex flex-row justify-around">
                        <motion.button className="p-2 w-1/4 text-white bg-teal-500 text-lg text-center self-end rounded-md"
                            whileHover={{backgroundColor: "#ec4899"}}
                            whileTap={{scale: 0.8}}
                            onClick={props.closeModal}
                        >
                            OK
                        </motion.button>
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

export default PlaylistExistsModal;