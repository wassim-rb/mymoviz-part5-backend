var express = require('express');
var router = express.Router();
const fetch = require('node-fetch')
module.exports = router;


router.get('/movies', (req, res) => {
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: process.env.OWM_API_KEY,
      }
    };

    fetch(url, options)
      .then(res => res.json())
      .then(movies => res.json({movies:movies.results}))
      .catch(err => console.error('error:' + err));

});
