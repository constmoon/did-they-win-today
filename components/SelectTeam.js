import React from 'react';
import style from '../styles/selectTeam.styl';
import axios from 'axios';
import { TeamContext } from '../contexts/teamContext';
import { TeamListContext } from '../contexts/teamListContext';

const SelectTeam = () => {
  const [team, setTeam] = React.useContext(TeamContext);
  const [teamList, setTeamList] = React.useContext(TeamListContext);

  React.useEffect(() => {
    const getTeamList = async () => {
      const res = await axios.get('api/teamList');
      setTeamList(res.data.teamList);
    }

    try {
      getTeamList();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className={style.selectbox}>
      <p>다른 팀이 궁금하다면...</p>
      <select value={team} onChange={e => setTeam(e.target.value)}>
        {teamList.map(team => {
          return (
            <option value={team.code} key={team.id}>{team.name}</option>
          )
        })}
      </select>
    </div>
  )
};

export default SelectTeam;