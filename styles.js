var express = require('express'), 
    path = require('path'), 
    app = express();

    // Use stylus middleware 
    app.use(require('stylus').middleware(process.argv[3]));
    app.use(express.static(process.argv[3]));
    app.listen(process.argv[2]);
