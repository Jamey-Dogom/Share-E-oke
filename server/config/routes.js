const mongoose = require('mongoose');
const PlaylistController = require('./../controllers/playlists');
const SongController = require('./../controllers/songs');


module.exports = function(app) {

    app.post('/api/playlist', PlaylistController.create);

    app.get('/api/playlist/:id', PlaylistController.getOne);

    app.delete('/api/playlist/:id', PlaylistController.delete);

    app.put('/api/playlist/:id', PlaylistController.update);
};