const lyricsController = require('./../controllers/lyrics');

module.exports = function(app) {

    app.get('/api/lyrics/:artist/:song', lyricsController.findSongLyrics)

};