const express = require('express');
const cors = require('cors');

const {getCharacters} = require('./controllers/characterCtrl');
const {getGames} = require('./controllers/gamesCtrl');

const port = 3002;

const app = express()

app.use(cors())

app.get('/api/characters', getCharacters)
app.get('/api/games', getGames)


app.listen(port, ()=> {
    console.log(`Listening on port ${port}.`)
})



// json data comments
// {
//     "id": "",
//     "name": "",
//     "universe": "",
//     "species": "",
//     "games": [
//         "Super Smash Bros. N64",
//         "Super Smash Bros. Melee",
//         "Super Smash Bros. Brawl",
//         "Super Smash Bros. Melee",
//         "Super Smash Bros. for Nintendo 3DS & Wii U",
//         "Super Smash Bros. Ultimate"
//     ],
//     "img": ""
// },