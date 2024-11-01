const cors = require('cors');
const express = require('express');
const { getAllGames, getGameById } = require('./controllers');

const app = express();
app.use(cors());
app.use(express.json());

//endpoint to get all games
app.get('/games', async (req, res) => {
  const games = getAllGames();
  res.json({ games });
});

//endpoint to get a game details by id
app.get('/games/details/:id', async (req, res) => {
  let game = getGameById(parseInt(req.params.id));
  res.json({
    game,
  });
});

app.get('/', (req, res) => {
  res.send('BD6.6 - HW - 2');
});

module.exports = { app };
