import * as Select from '@radix-ui/react-select';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ExpandButton from '../Buttons/ExpandButton';

function DropdownMenu(props){
    const [value, setValue] = useState(props.playlistData[0].name);
    
    useEffect(() =>{
        props.handleChange(value);
    
      }, [value]);
    
    return(
        <Select.Root value={value} onValueChange={setValue}>
            <Select.Trigger 
                className="basis-4/5 grow p-2 inline-flex flex-row justify-between bg-slate-700 rounded-t-md text-left text-2xl text-white 
                focus:outline-none focus:ring focus:ring-teal-500
                hover:ring hover:ring-teal-500"
                aria-label="Playlists">
                <Select.Value 
                    aria-label={value}
                />
                <Select.Icon className="pr-2 pt-1">
                    <ExpandButton />
                </Select.Icon>
            </Select.Trigger>
                <Select.Portal>
                    <Select.Content 
                        position="popper" 
                        side="bottom" 
                        align="start" 
                        className="z-40 h-fit overflow-hidden bg-slate-500 focus:outline-none rounded-b-md"
                        style={{width: "var(--radix-select-trigger-width)"}}
                        asChild
                    >
                        <motion.div 
                        initial={{ opacity: 0, y: -100 }} 
                        animate={{ opacity: 1, y: 0 }}
                        >
                            <Select.Viewport>
                                <Select.Group>
                                {props.playlistData.map(playlist => <Select.Item 
                                        className="p-6 text-xl text-slate-200 flex items-center justify-start h-2 relative select-none 
                                        focus:outline-none focus:bg-slate-400 focus:text-pink-500" 
                                        key={playlist.id}
                                        value={playlist.name}>
                                            <Select.ItemText>{playlist.name}</Select.ItemText>
                                    </Select.Item>
                                )}
                                </Select.Group>
                            </Select.Viewport>
                        </motion.div>
                    </Select.Content>
                </Select.Portal>
        </Select.Root>
    );
};

export default DropdownMenu;