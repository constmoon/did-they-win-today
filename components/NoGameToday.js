import React from 'react';

const NoGameToday = ({ todayGame }) => {
  // TODO: 추후 월요일 경기가 존재했다가 취소될 경우에 취소로 표기할 것
  return (
    todayGame.date.includes('월') ?
      <div>오늘은 경기가 없습니다.</div> :
      <div>오늘 경기는 취소되었습니다.</div>
  )
}

export default NoGameToday;