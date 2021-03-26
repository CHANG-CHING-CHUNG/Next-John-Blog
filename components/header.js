import Image from 'next/image';

const name = "John"
export default function Header() {
  return (
    <header className="sticky bg-blue-400 mx-auto py-3 px-5">
      <nav>
        <div className="text-white font-mono text-3xl">
          John's Blog
        </div>
        <ul>
          <li>首頁</li>
          <li>關於我</li>
          <li>程式基礎教學</li>
          <li>隨手札記</li>
        </ul>
      </nav>
    </header>
  )
}