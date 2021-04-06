export default function SearchIcon() {
  return (
    <div className="cursor-pointer text-white flex justify-center right-5">
      <input placeholder="搜尋...." className="placeholder-white placeholder-opacity-75 appearance-none bg-transparent border-b-2 w-40 outline-none"/>
      <svg className="h-12 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24   24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
  )
}