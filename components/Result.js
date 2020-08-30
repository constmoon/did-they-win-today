import React from 'react';
import useTodayGame from 'hooks/useTodayGame';
import NoGameToday from './NoGameToday';
import TodayGame from './TodayGame';
import { TeamContext } from '../contexts/teamContext';
import style from 'styles/result.styl';

const Result = () => {
  const [getSingleGame, todayGame, isLoaded, setIsLoaded] = useTodayGame();
  const [team] = React.useContext(TeamContext);

  React.useEffect(() => {
    if (team) {
      getSingleGame(team);
    }
    return () => setIsLoaded(false);
  }, [team]);

  if (!isLoaded) {
    return (
      <div className={style.loading}>로딩중</div>
    )
  }

  return (
    <div className={style.result}>
      {todayGame.hasGame ?
        <TodayGame todayGame={todayGame} /> :
        <NoGameToday todayGame={todayGame} />}
    </div>
  )
}

export default Result;