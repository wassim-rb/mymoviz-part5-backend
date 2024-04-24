var express = require('express');
var router = express.Router();
const fetch = require('node-fetch')
module.exports = router;
const Key = process.env.OWM_API_KEY


router.get('/movies', (req, res) => {
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: Key,
      }
    };

    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        res.json({movies:data.results})
      })
        
      .catch(err => console.error('error:' + err));

});
