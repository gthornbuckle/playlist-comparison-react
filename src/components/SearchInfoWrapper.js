import React from "react";

function SearchInfoWrapper(props){

    return(
    <div className="container mx-auto">
        <span className="flex flex-row py-4">
            <input className="basis-5/6 placeholder:italic placeholder:text-slate-400 block
            bg-slate-700 w-full border border-slate-700 rounded-l-md py-2 px-2 shadow-sm focus:outline-none
            focus:border-teal-500 focus:ring-teal-500 focus:ring-1 sm:text-md text-teal-500
            selection:bg-teal-300 selection:text-teal-900"
            placeholder="Enter Spotify playlist url" type="text" name="search"></input>
            <button className=" basis-1/6 bg-teal-500 text-white rounded-r-md py-2 px-2 sm:text-md border border-teal-500">+</button>
         </span>
    </div>
    );
}

export default SearchInfoWrapper;