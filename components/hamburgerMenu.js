import { useState, useEffect, useRef } from 'react';

export default function HamburgerMenu() {


  return (
      <nav>
        <button class="inline-block w-10 h-10 text-white p-1">
          <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        <div className="twitter-blue w-screen fixed">

        </div>
      </nav>
  )
}