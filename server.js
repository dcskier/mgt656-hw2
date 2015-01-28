var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-656!');
});

app.get('/powerfulllama', function(request, response){
    response.send('Hello MGT-656! See nickname.');
});

app.listen(process.env.PORT || 4000);