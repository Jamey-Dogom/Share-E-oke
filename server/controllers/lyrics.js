// const quicklyrics = require('quicklyrics');

module.exports = {
    findSongLyrics: function(req, res) {
        quicklyrics(req.params.artist, req.params.song, function(lyrics) {
            //lyrics in an array
            console.log(lyrics);
            res.json({lyrics});
        }
    )}
}