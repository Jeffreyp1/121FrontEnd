import React from 'react'
import Search from './Search'
import {useNavigate} from 'react-router-dom';
export default function SearchPage() {
  return (
    <div className="min-h-screen flex items-center flex-col justify-center">
        <h1 className=" text-white text-2xl p-5">
                    <a href="/">
                        CS121 Search Engine
                    </a>
          </h1>
          <Search/>      
    </div>
  );
}