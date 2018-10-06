const characters = require('../data/characters.json');

const getCharacters = (req, res) => {

  res.status(200).send(characters);
};

module.exports = {
  getCharacters
};
