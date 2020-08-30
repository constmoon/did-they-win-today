import React from "react";
import Head from 'next/head';
import Result from 'components/Result';
import SelectTeam from 'components/SelectTeam';
import { TeamListContextProvider } from '../contexts/teamListContext';
import { TeamContextProvider } from '../contexts/teamContext';
import SEO from '../components/SEO';
import 'styles/index.styl';

export default () => {
  return (
    <>
      <SEO />
      <Head>
        <title>Did they win?</title>
      </Head>
      <main>
        <TeamListContextProvider>
          <TeamContextProvider>
            <Result />
            <SelectTeam />
          </TeamContextProvider>
        </TeamListContextProvider>
      </main>
    </>
  )
}

