import React from 'react';

const TodayGame = ({ todayGame, winner }) => {
  const { date, isLive, away, home } = todayGame;

  return (
    <div>
      <div className="prev-game">
        {winner === 'KT' ? <div>YES</div> : <div>NO</div>}
      </div>
      <div className="current-game">
        {isLive ? <div>경기 중입니다.</div> : <div>경기 종료</div>}
        <div className="score">
          <div>{date}</div>
          <span>{away.team}: {away.score}</span>
          <span> vs</span>
          <span> {home.team}: {home.score}</span>
        </div>
      </div>
      <style jsx>{`
        .prev-game {
          font-weight: bold;
          font-size: 5rem;
        }
        .current-game {
          margin-top: 1rem;
          font-size: 1.3rem;
        }
        .score {
          margin-top: 0.5rem;
        }
      `}
      </style>
    </div>
  )
}

export default TodayGame;