
const mongoose = require('mongoose');
const PlaylistController = require('./../controllers/playlists');
const lyricsController = require('./../controllers/lyrics');

module.exports = function(app) {

    app.post('/api/playlist', PlaylistController.create);

    app.get('/api/playlist/:id', PlaylistController.getOne);

    app.delete('/api/playlist/:id', PlaylistController.delete);

    app.put('/api/playlist/:id', PlaylistController.update);

    app.get('/api/lyrics/:artist/:song', lyricsController.findSongLyrics)

    app.get('/api/lyrics/:artist/:song', lyricsController.findSongLyrics)

};

