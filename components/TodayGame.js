import React from 'react';


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

const TodayGame = ({ todayGame, winner }) => {
  const { date, isLive, isEnd, away, home } = todayGame;

  return (
    <div>
      <div className={style.result}>
        {winner === 'KT' ? <div>YES</div> : <div>NO</div>}
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