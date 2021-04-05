import Image from 'next/image';
import NavList from './navList'
import HamburgerMenu from './hamburgerMenu'

const SearchIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24   24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>);

export default function Header() {

  return (
    <header className=" sm:justify-start justify-between sticky twitter-blue mx-auto py-3 px-5 flex">
      <div className="flex items-center text-white flex-shrink-0 font-mono text-3xl">
        <a className="h-full flex flex-col justify-center items-center" href="#">
        John's Blog
        </a>
      </div>

      <NavList/>
      <div className="hidden sm:block cursor-pointer h-12 w-8 text-white flex items-center absolute right-5">
        <SearchIcon/>
      </div>
    </header>
  )
}