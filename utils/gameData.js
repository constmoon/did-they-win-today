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
      setTodayGame(gameList[index]);
      setHasGame(gameList[index].hasGame);
    } catch (error) {
      throw Error(error);
    } finally {
      setIsLoaded(true);
    }
  }

  return [getTodayGame, hasGame, todayGame, isLoaded];
}

export { useTodayGame };