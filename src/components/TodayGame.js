import React from 'react';

const TodayGame = props => {
  const { away, home } = props.todayGame;

  return (
    <div>
      {away.score === null ?
        <strong>아직 경기 전입니다.</strong> :
        <div>
          <span>{away.team}: {away.score}</span>
          <span>vs</span>
          <span> {home.team}: {home.score}</span>
        </div>
      }
    </div>
  )
}

export default TodayGame;