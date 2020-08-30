import React from 'react';

import { TeamListContext } from '../contexts/teamListContext';
import { TeamContext } from '../contexts/teamContext';
import { calculateResult } from '../utils/calculateResult';

import ScoreBoard from './ScoreBoard';
import style from 'styles/todayGame.styl';

const LiveStreaming = () => {
  return <div className={style.live}>경기 중입니다.</div>
}

const NonLiveStreaming = ({ isEnd }) => {
  return isEnd ?
    <div className={style.live}>경기 종료</div> :
    <div className={style.live}>아직 경기 전입니다.</div>
}

const TodayGame = ({ todayGame }) => {
  const { date, isLive, isEnd, away, home } = todayGame;
  const [getWinner, winner] = calculateResult();
  const [team] = React.useContext(TeamContext);

  const [teamList] = React.useContext(TeamListContext);
  const [isMyTeamWin, setIsMyTeamWin] = React.useState(false);

  React.useEffect(() => {
    getWinner(todayGame);
    if (winner && winner !== 'NONE') {
      console.log('winner: ', winner)
      setIsMyTeamWin(teamList.find(team => team.name === winner).code === team)
    }
  }, [todayGame, winner]);

  return (
    <div>
      <div className={style.result}>
        {isMyTeamWin ? <strong>YES</strong> : <strong>NO</strong>}
      </div>
      <div className={style.current}>
        {isLive ?
          <>
            <LiveStreaming />
            <ScoreBoard date={date} away={away} home={home} />
          </> :
          <>
            <NonLiveStreaming isEnd={isEnd} />
            <ScoreBoard date={date} away={away} home={home} />
          </>
        }
      </div>
    </div>
  )
}

export default TodayGame;