import { useState } from 'react';
import axios from 'axios';

const fetchGameList = async () => {
  const response = await axios.get(`/api/parser`);
  const gameList = response.data.gameList;
  return gameList;
}

const useTodayGame = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasGame, setHasGame] = useState(false);
  const [todayGame, setTodayGame] = useState([]);

  const getTodayGame = async () => {
    try {
      const gameList = await fetchGameList();
      const date = new Date;
      const index = date.getDate() - 1;
      // TODO: 아직 경기가 없고 직전일이 월요일(무게임)일 경우 오늘 예정된 게임 표시...를 좀 더 다른 방법으로
      if (gameList[index].away.score === null && gameList[index - 1].date.includes('월')) {
        setTodayGame(gameList[index - 1]);
        setHasGame(gameList[index - 1].hasGame);
      }
      else {
        setTodayGame(gameList[index]);
        setHasGame(gameList[index].hasGame);
      }
    } catch (error) {
      throw Error(error);
    } finally {
      setIsLoaded(true);
    }
  }

  return [getTodayGame, hasGame, todayGame, isLoaded];
}

export { useTodayGame };