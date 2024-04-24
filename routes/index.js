var express = require('express');
var router = express.Router();
const fetch = require('node-fetch')
module.exports = router;
const key = process.env.OWM_API_KEY;


router.get('/movies', (req, res) => {
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: key,
      }
    };

    fetch(url, options)
      .then(response => response.json())
      .then(movies => res.json({movies:movies.results}))
      .catch(err => console.error('error:' + err));

});
