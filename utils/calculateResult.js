import { useState } from 'react';

const calculateResult = () => {
  const [winner, setWinner] = useState('');

  const getWinner = props => {
    const { away, home } = props;
    const maxScore = Math.max(away.score, home.score);

    Object.keys(props).find(key => {
      if (Number(props[key].score) === maxScore) {
        setWinner(props[key].team)
      }
    });
  }

  return [getWinner, winner];
}

export { calculateResult };