const express = require('express')
const axios = require('axios');
const app = express()
const port = 3000
const token = "";

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
});

app.get('/', async (req, res) => {
  res.send('ok');
  // const resp = await axios.get(`https://videocdn.tv/api/movies?api_token=${token}`);
  // return res.status(200).json({ data: resp.data });
});

app.use(function(req, res) {
  res.status(404).send('Вибачте, такої сторінки не існує!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
