const mongoose = require('mongoose');

const PlaylistSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true
    },
    songs: [{}],
    users: [],
}, { timestamps: true })

mongoose.model("Playlist", PlaylistSchema);
