const mongoose = require('mongoose');
const Playlist = mongoose.model('Playlist');


module.exports = {
    create: function (req, res) {
        Playlist.create(req.body)
            .then(playlist => {
                res.json(playlist)
            })
            .catch(e => {
                const errors = [];

                for (key in e.errors) {
                    errors.push(e.errors[key].message);
                }
                res.json({
                    errors
                })
            })
    },

    getOne(req, res) {
        Playlist.find({ id: req.params.id })
            .then(playlist => res.json({ playlist }))
            .catch(e => res.json({ errors: e }));
    },

    update: function (req, res) {
        Playlist.updateOne({
                id: req.params.id
            }, {
                $addToSet: {
                    songs: req.body.songs,
                    users: req.body.users,
                }
            }, {
                new: true,
                runValidators: true
            })
            .then(playlist => {
                res.json({
                    playlist
                })
            })
            .catch(e => {
                const errors = [];

                for (key in e.errors) {
                    errors.push(e.errors[key].message);
                }
                res.json({
                    errors
                })
            })
    },

    delete: function (req, res) {
        Playlist.deleteOne({
                id: req.params.id
            })
            .then(() => {
                console.log("success");
            })
            .catch(err => res.json(err));
    },

};
