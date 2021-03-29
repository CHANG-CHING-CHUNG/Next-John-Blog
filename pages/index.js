import Head from 'next/head';
import Layout from '../components/layout';
import Post from './posts/post';
export default function Home() {
  return (
      <Layout>
        <Post />
      </Layout>
  )
}
