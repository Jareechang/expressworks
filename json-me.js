var express = require('express'),
    fs = require('fs'),
    app = express();

    app.get('/books', function(req,res){
        fs.readFile(process.argv[3], function(err,data){
            //Added error handling for node 
            if(err){
                res.sendStatus(500);
            }
            try {
                books = JSON.parse(data);
            }catch(err) {
                res.sendStatus(500);
            }
            res.json(books);
        }) 
    })
    app.listen(process.argv[2]);
