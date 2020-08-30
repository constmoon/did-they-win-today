import React from "react";
import Result from 'components/Result';
import SelectTeam from 'components/SelectTeam';
import { TeamListContextProvider } from '../contexts/teamListContext';
import { TeamContextProvider } from '../contexts/teamContext';
import Header from '../components/Header';
import 'styles/index.styl';

export default () => {
  return (
    <>
      <Header />
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

