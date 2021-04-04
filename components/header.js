import Image from 'next/image';
import { useState, useEffect } from 'react';

const SearchIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24   24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>);

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleBtnClick = (e) => {
    setOpen(!open);
  }

  useEffect(() => {
    document.addEventListener("mousedown". handleClickOutSide);
    return document.removeEventListener("mousedown", handleClickOutSide);
  },[open])

  return (
    <header className="sticky twitter-blue mx-auto py-3 px-5 flex">
      <div className="flex items-center text-white flex-shrink-0 font-mono text-3xl">
        <a className="h-full flex flex-col justify-center items-center" href="#">
        John's Blog
        </a>
      </div>

      <nav className="flex space-x-5 h-12 ml-12 text-lg items-center text-white">
        <div className="h-12"><a className="hover:text-gray-300 h-full flex flex-col justify-center items-center" href="#">首頁</a></div>
        <div className="h-12"><a className="hover:text-gray-300 flex h-full  flex-col justify-center items-center" href="#">關於我</a></div>
        <div className="relative group h-12">
          <button onClick={handleBtnClick} className="hover:text-gray-300 h-12">
            程式基礎教學
          </button>
          {
            open &&
            <>
              <hr className="absolute h-1 bg-white w-full"></hr>
              <ul className="shadow-lg mt-1 divide-y-2 absolute bg-white text-black w-auto px-6">
                <li><a className="block py-4" href="#">JavaScript</a></li>
                <li><a className="block py-4" href="#">HTML</a></li>
                <li><a className="block py-4" href="#">CSS</a></li>
              </ul>
            </>
          }
          
        </div>
        <div className="h-12"><a className="hover:text-gray-300 flex h-full  flex-col justify-center items-center" href="#">隨手札記</a></div>
      </nav>

      <div className=" cursor-pointer h-12 w-8 text-white flex items-center absolute right-5">
        <SearchIcon/>
      </div>
    </header>
  )
}