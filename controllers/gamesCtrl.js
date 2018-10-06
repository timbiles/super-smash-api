const games = require('../data/games.json');

const getGames = (req, res) => {
    res.status(200).send(games)
}

module.exports = {
    getGames
}