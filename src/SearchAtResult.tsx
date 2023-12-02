import React, {useState} from 'react'
import { BrowserRouter as Router, Route, useNavigate} from 'react-router-dom';
interface Search {
    onSearch: (value: string) => void;
}
export default function SearchAtResult({val}:any){
    let appNav = useNavigate();
    const [query,setQuery]= useState(val)
    const handleEnter = (event: any)=>{
        if(event.key === 'Enter'){
            appNav(`/resultPage?query=${encodeURIComponent(event.target.value)}`)
        }
    }
    
    return(
        <>
            <div className="w-full flex justify-start align-items-center">
                <div className="relative w-3/5">
                    <span className="inset-y-0 absolute left-0 flex items-center pl-2">
                        {<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>}
                    </span>
                    <input className="w-full pl-10 rounded-full p-1 border-none bg-gray-700 text-white placeholder-gray-400"
                            value={query}
                            onKeyDown={handleEnter}
                            type="text" 
                            onChange={(event)=>{setQuery(event.target.value)}}
                            />
                            
                </div>
    
            </div>
        </>
                // <div className="w-full">
        //         <div className="flex justify-center">
        //             <input className="w-1/4 pl-10 pr-3 py-2 rounded-lg border p-2 bg-gray-600 text-gray-800"
        //             type="text" 
        //             placeholder="&#128269; "/>
        //         </div>
        // </div>
    )
}