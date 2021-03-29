import Head from 'next/head';
import Header from './header';
import SideBar from './sidebar';

export default function Layout({ children, home }) {
  return (
    <div className="container center mx-auto bg-white">
      <Head>
        <meta
            name="description"
            content="John 的部落格，紀錄學習心得及寫一些程式基礎教學文"
          />
      </Head>
      <Header/>
      <main>
        <div className="container p-10 flex flex-col justify-center items-center ">
          <SideBar/>
          {
            children
          }
        </div>
      </main>
    </div>
  )
}