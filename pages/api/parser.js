import fetch from 'node-fetch';
import { parse } from 'node-html-parser';

const date = new Date();
const MONTH = date.getMonth() + 1;
const BASE_URL = `https://sports.news.naver.com/kbaseball/schedule/index.nhn`;

export default async (req, res) => {
  const TEAM = req.query.team;
  const response = await fetch(`${BASE_URL}?month=${MONTH}&teamCode=${TEAM}`);
  const html = await response.text();
  const doc = parse(html);
  const thisMonthGames = doc.querySelectorAll('.tb_wrap div');

  const gameList = thisMonthGames.map(game => {
    const date = game.querySelector('.td_date').text || '';

    if (game.querySelector('.td_none') || game.querySelector('.cancel')) {
      return ({
        date: date,
        hasGame: false
      })
    }
    else {
      const awayTeam = game.querySelector('.team_lft').text || '';
      const homeTeam = game.querySelector('.team_rgt').text || '';
      const isLive = game.querySelector('.td_btn a').toString().includes('btn_wd_on');
      const isEnd = game.querySelector('.td_btn a').toString().includes('경기결과') || game.querySelectorAll('.td_btn a').toString().includes('경기영상');
      const [awayScore, homeScore] = game.querySelector('.vs') ? [null, null] : game.querySelector('.td_score').text.split(':');

      return ({
        date: date,
        hasGame: true,
        isLive: isLive,
        isEnd: isEnd,
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