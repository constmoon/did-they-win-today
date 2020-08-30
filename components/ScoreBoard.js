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
};

export default ScoreBoard;