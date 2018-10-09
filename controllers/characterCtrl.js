const characters = require('../data/characters.json');

const getCharacters = (req, res) => {
  let og = [];
  characters.map(e => {
    e.games.map(el => el.includes('N64') && og.push(e));
  });
  console.log(og);
  res.status(200).send(og);
};

module.exports = {
  getCharacters
};
