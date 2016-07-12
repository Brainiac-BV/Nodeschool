//module loading
var fs = require('fs'),
  path = require('path'),
    dir = process.argv[2],
    extension = '.' + process.argv[3];

fs.readdir(dir, function (err, data) {
    for(var i = 0; i < data.length; i+=1){
        if(path.extname(data[i]) === extension)
            console.log(data[i]);
    }

});
