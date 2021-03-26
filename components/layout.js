import Head from 'next/head';
import Header from './header';

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
        {
          children
        }
      </main>
    </div>
  )
}