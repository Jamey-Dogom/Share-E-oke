const mongoose = require('mongoose');

const PlaylistSchema = new mongoose.Schema({
    songs: [],
    room: {
        type: String,
        required: [
            true,
            "Please Enter a room name."
        ]
    },
    users:[],
}, { timestamps: true })

mongoose.model("Playlist", PlaylistSchema);