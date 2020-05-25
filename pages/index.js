import Head from 'next/head';
import Result from 'components/Result';
import 'styles/index.styl';

export default () => {
  return (
    <>
      <Head>
        <title>Did they win?</title>
      </Head>
      <main>
        <Result />
      </main>
    </>
  )
}

