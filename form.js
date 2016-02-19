var express = require('express'),
    path = require('path'),
    bodyparser = require('body-parser'),
    app = express();

    // use bodyparse middleware
    app.use(bodyparser.urlencoded({extended: false}));

    app.post('/form', function(req,res){
       res.send(req.body.str.split('').reverse().join(''));
    })
    app.listen(process.argv[2]);
