import React from 'react';
import style from 'styles/todayGame.styl';

const ScoreBoard = ({ date, away, home }) => {
  if (!away.score && !home.score) {
    away.score = 0;
    home.score = 0;
  }

  return (
    <div className={style.score}>
      <div>{date}</div>
      <span>{away.team}: {away.score}</span>
      <span> vs</span>
      <span> {home.team}: {home.score}</span>
    </div>
  )
}

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
  const score = away.score;

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