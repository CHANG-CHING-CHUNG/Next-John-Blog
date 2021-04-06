import Image from 'next/image';
import NavList from './navList';
import HamburgerMenu from './hamburgerMenu';
import SearchIcon from './searchIcon';

export default function Header() {

  return (
    <header className="md:flex-row flex-col sm:justify-start justify-between sticky twitter-blue mx-auto py-3 px-5 flex">
      <div className="lg:mr-12 flex justify-center items-center text-white flex-shrink-0 font-mono text-3xl">
        <a className="h-full flex flex-col justify-center items-center" href="#">
        John's Blog
        </a>
      </div>

      <NavList/>
      <SearchIcon/>

    </header>
  )
}