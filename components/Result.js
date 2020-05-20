import React, { useEffect } from 'react';
import { useTodayGame } from 'api/GameData';
import NoGameToday from './NoGameToday';
import TodayGame from './TodayGame';

const Result = () => {
  const [getTodayGame, hasGame, todayGame, isLoaded] = useTodayGame();

  useEffect(() => {
    getTodayGame();
  }, [])

  if (!isLoaded) {
    return <div>로딩중</div>
  }

  return (
    <div>
      {hasGame ?
        <TodayGame todayGame={todayGame} /> :
        <NoGameToday />}
    </div>
  )
}

export default Result;