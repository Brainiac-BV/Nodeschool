var fs = require('fs');
var fileContent = fs.readFile(process.argv[2], 'utf-8' ,function (err, data) {
   var fileContent2 = data.split('\n').length -1;
    console.log(fileContent2);
});

