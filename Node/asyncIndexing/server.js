var http = require('http');
var concat = require("concat-stream");

var urls=['http://www.reddit.com/r/aww.json', 'http://www.fieldscope.org/api/observations'];
var results =[];


for(var i = 0; i<urls.length; i++){
    getUrl(urls[i], i);
}

function getUrl(eachUrl, index){

    http.get(eachUrl, function(response){
        response.pipe(concat(function(data){
            results[index]=data.length;
            printResult(results);
        }));

    })
}

function printResult(result){
    console.log(result);
}