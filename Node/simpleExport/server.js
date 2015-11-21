var http = require('http');
var songLibrary = require('./songLibrary');


http.createServer(function(request, response) {
    response.writeHead(200, { Content: "text/plain" });
    response.write(getLyrics());
    response.end();
}).listen(8888);

function getLyrics(){
    var line = Math.floor(Math.random()*songLibrary.songList.length);
    return songLibrary.songList[line];

}