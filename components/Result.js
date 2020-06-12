import React, { useEffect } from 'react';
import { useTodayGame } from 'utils/gameData';
import { calculateResult } from 'utils/calculateResult';
import NoGameToday from './NoGameToday';
import TodayGame from './TodayGame';

const Result = () => {
  const [getTodayGame, hasGame, todayGame, isLoaded] = useTodayGame();
  const [getWinner, winner] = calculateResult();

  useEffect(() => {
    getTodayGame();
  }, []);

  useEffect(() => {
    if (hasGame) {
      getWinner(todayGame);
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return (
      <div>로딩중</div>
    )
  }

  return (
    <>
      {hasGame ?
        <TodayGame todayGame={todayGame} winner={winner} /> :
        <NoGameToday todayGame={todayGame} />}
    </>
  )
}

export default Result;