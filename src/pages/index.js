import Head from 'next/head';
import Result from '../components/Result';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Did they win?</title>
      </Head>
      <main>
        <Result />
      </main>
      <style jsx>{`
          
        `}</style>
    </div>
  )
}

