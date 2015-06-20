/**
 * Created by soufien on 5/23/15.
 */


// hello.js
var deployd = require('deployd')
    , options = {port: 3000};

var dpd = deployd(options);
console.log("Server listen on port : "+options.port);
dpd.listen();
