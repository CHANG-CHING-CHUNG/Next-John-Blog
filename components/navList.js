import { useState, useEffect, useRef } from 'react';

export default function NavList() {
  const [open, setOpen] = useState(false);
  const dropdownDiv = useRef(null);

  const handleBtnClick = (e) => {
    setOpen(!open);
  }

  useEffect(() => {
    function handleClickOutSide(e) {
      if (dropdownDiv.current && !dropdownDiv.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutSide);
    return () => document.removeEventListener("click", handleClickOutSide);
  },[open])

  return (
      <nav className="md:ml-5 sm:flex md:flex-row sm:flex-1 flex-col md:space-x-5 min-h-0 text-lg items-center text-white">
          <div className="h-12"><a className="hover:text-gray-300 h-full flex flex-col justify-center items-center" href="#">首頁</a></div>
          <div className="h-12"><a className="hover:text-gray-300 flex h-full  flex-col justify-center items-center" href="#">關於我</a></div>
          <div ref={dropdownDiv} className="relative group h-12 flex justify-center">
            <button onClick={handleBtnClick} className="hover:text-gray-300 h-12">
              程式基礎教學
            </button>
            {
              open &&
              <>
                <ul className="shadow-lg top-12 divide-y-2 absolute bg-white text-black w-auto px-6">
                  <li><a className="block py-4" href="#">JavaScript</a></li>
                  <li><a className="block py-4" href="#">HTML</a></li>
                  <li><a className="block py-4" href="#">CSS</a></li>
                </ul>
              </>
            }
            
          </div>
          <div className="h-12"><a className="hover:text-gray-300 flex h-full  flex-col justify-center items-center" href="#">隨手札記</a></div>
        
      </nav>
  )
}