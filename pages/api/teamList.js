export default (req, res) => {
  const teamList = [
    {
      id: 1,
      code: 'OB',
      name: '두산'
    },
    {
      id: 2,
      code: 'WO',
      name: '키움'
    },
    {
      id: 3,
      code: 'SK',
      name: 'SSG'
    },
    {
      id: 4,
      code: 'LG',
      name: 'LG'
    },
    {
      id: 5,
      code: 'NC',
      name: 'NC'
    },
    {
      id: 6,
      code: 'KT',
      name: 'KT'
    },
    {
      id: 7,
      code: 'HT',
      name: 'KIA'
    },
    {
      id: 8,
      code: 'SS',
      name: '삼성'
    },
    {
      id: 9,
      code: 'HH',
      name: '한화'
    },
    {
      id: 10,
      code: 'LT',
      name: '롯데'
    }]

  res.status(200).json({
    teamList
  });
}