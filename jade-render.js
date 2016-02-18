var express = require('express'),
    path = require('path'),
    app = express();
    // specifiy path to the template file in the folder templates  
    app.set('views', path.join(__dirname, 'templates'));
    
    // Tell Express to use jade template engine  
    app.set('view engine', 'jade');
    app.get('/home', function(req, res) {
        res.render('index', {date: new Date().toDateString() });
    }) 
    app.listen(process.argv[2]);
