import fetch from 'node-fetch';
import { parse } from 'node-html-parser';

const date = new Date();
const MONTH = date.getMonth() + 1;
const TEAM = `KT`;
const BASE_URL = `https://sports.news.naver.com/kbaseball/schedule/index.nhn`;

export default async (req, res) => {
  const response = await fetch(`${BASE_URL}?month=${MONTH}&teamCode=${TEAM}`);
  const html = await response.text();
  const doc = parse(html);
  const thisMonthGames = doc.querySelectorAll('.tb_wrap div');

  const gameList = thisMonthGames.map(game => {
    if (game.querySelector('.td_none') || game.querySelector('.cancel')) {
      return ({
        hasGame: false
      })
    }
    else {
      const awayTeam = game.querySelector('.team_lft').text || '';
      const homeTeam = game.querySelector('.team_rgt').text || '';
      const isLive = game.querySelector('.td_btn a').toString().includes('btn_wd_on');
      const [awayScore, homeScore] = game.querySelector('.vs') ? [null, null] : game.querySelector('.td_score').text.split(':');

      return ({
        hasGame: true,
        isLive: true,
        away: {
          team: awayTeam,
          score: awayScore
        },
        home: {
          team: homeTeam,
          score: homeScore
        }
      })
    }
  });

  res.status(200).json({
    gameList
  });
}