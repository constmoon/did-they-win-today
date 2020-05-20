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
      const month = date.getDate();
      setTodayGame(gameList[month]);
      setHasGame(gameList[month].hasGame);
    } catch (error) {
      throw Error(error);
    } finally {
      setIsLoaded(true);
    }
  }

  return [getTodayGame, hasGame, todayGame, isLoaded];
}

export { useTodayGame };