import React from 'react';

const Scheduled = () => {
  return <div>아직 경기 전입니다.</div>
}

const Live = props => {
  return (
    <div>
      <div>경기 중입니다.</div>
      <span>{props.away.team}: {props.away.score}</span>
      <span> vs</span>
      <span> {props.home.team}: {props.home.score}</span>
    </div>
  )
}

// TODO: 당일 경기 종료 ~ 다음날 경기 이전까지 승패여부 띄우기
const TodayGame = props => {
  const { isLive, away, home } = props.todayGame;

  return (
    <div>
      {isLive ?
        <Live away={away} home={home} /> :
        <Scheduled />
      }
    </div>
  )
}

export default TodayGame;