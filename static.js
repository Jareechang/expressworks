var express = require('express'),
    path = require('path'),
    app = express();

    app.use(express.static(process.argv[3] || path.join(__dirname, 'static')));

    app.listen(process.argv[2]);

