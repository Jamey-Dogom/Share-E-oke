const mongoose = require('mongoose');
const PlaylistController = require('./../controllers/playlists');

module.exports = function(app) {

    app.post('/api/playlist', PlaylistController.create);

    app.get('/api/playlist/:room', PlaylistController.getOne);

    app.delete('/api/playlist/:room', PlaylistController.delete);

    app.put('/api/playlist/:room', PlaylistController.update);

};
