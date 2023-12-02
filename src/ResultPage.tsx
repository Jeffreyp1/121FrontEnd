import React , {useEffect, useState}from 'react'
import {useLocation } from 'react-router-dom';
import SearchAtResult from './SearchAtResult'

export default function ResultPage(){
    const maxPerPage = 10;
    const location = useLocation();
    const urlParam = new URLSearchParams(location.search);
    const getQuery = urlParam.get('query') || '';
    const [data, setData] = useState<String[]>([]);
    const [time, setTime] = useState(0)
    useEffect(()=>{
        let cache = localStorage.getItem(getQuery.toLowerCase())
        if(cache){
            let jsonData = JSON.parse(cache)
            setData(jsonData)
            console.log("USING cache: ", jsonData)
        }else{
            fetch(`http://127.0.0.1:5000/api/search?query=${encodeURIComponent(getQuery)}&top_n=${56000}`)
            .then(resp =>{
                if (resp.headers.get("content-type")?.includes("application/json")) {
                    return resp.json();
                } else {
                    throw new Error('Not a JSON response');
                }
            })
            .then((val)=>{
                setData(val[0])
                setTime(val[1])
                console.log("Setting cache", getQuery, data)
                localStorage.setItem(getQuery, JSON.stringify(data))
            })
            .catch(error=>console.error("error: ", error))
        }

    },[getQuery])
    return(
        <div>
            <h1 className="pt-5 w-4/5 flex mx-auto text-white text-2xl">
                <a href="/">
                    CS121 Search Engine
                </a>
            </h1>
            <div>
                
                <div className="pt-1 w-4/5 flex mx-auto">
                    {<SearchAtResult val={getQuery}/>}
                </div>
                <hr className="my-4 border-gray-600"/>
                <div className="pl-3 w-4/5 flex mx-auto">
                    <h1 className="text-gray-400">About {data.length} results</h1>
                </div>
                <div className="pl-3 w-4/5 flex mx-auto">
                    <h1 className="text-gray-400"> Time: {time}</h1>
                </div>
            

                {data.map((val, index)=>(
                    <div className ="w-4/5 flex mx-auto">
                        <h5 className="flex text-xl justify-start p-3 text-white">{index + 1}.
                            <a 
                            className=" hover:underline pl-2 hover:bg-gray-100" 
                            target="_blank" 
                            href="#"
                            style={{color: '#86aef1'}}
                            onClick={(e)=>{
                            e.preventDefault()
                            window.location.href=`${val}`}}
                            >
                                {val}
                            </a>
                        </h5>
                    </div>
                ))}
            </div>
        </div>
        
    )
}