import { useState, useContext } from 'react';
import { TeamContext } from '../contexts/teamContext';
import axios from 'axios';

const fetchGameList = async (team) => {
  const response = await axios.get(`/api/parser`, {
    params: {
      team
    }
  });
  const gameList = response.data.gameList;
  return gameList;
}

const useTodayGame = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [todayGame, setTodayGame] = useState([]);

  const getSingleGame = async team => {
    try {
      const gameList = await fetchGameList(team);
      const date = new Date;
      const index = date.getDate() - 1;
      if (gameList[index].hasOwnProperty('away') && gameList[index].away.score === null) {
        const prevGame = gameList[index - 1];
        setTodayGame(prevGame);
      }
      else {
        setTodayGame(gameList[index]);
      }
    } catch (error) {
      throw Error(error);
    } finally {
      setIsLoaded(true);
    }
  }

  return [getSingleGame, todayGame, isLoaded, setIsLoaded];
}

export default useTodayGame;