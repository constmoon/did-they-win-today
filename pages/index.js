import Head from 'next/head';
import Result from 'components/Result';

export default () => {
  return (
    <div className="container">
      <Head>
        <title>Did they win?</title>
      </Head>
      <main>
        <Result />
      </main>
      <style jsx global>{`
        html, body {
          margin: 0;
          padding: 0;
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          line-height: 1.4;
          word-break: keep-all;
        }
        main {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
      `}</style>
    </div>
  )
}

