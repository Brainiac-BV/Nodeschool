const myModule = require('./ls.js');
const dir = process.argv[2];
const extension = process.argv[3];


myModule(dir, extension, function(err, data) {
  if (err) {
    return console.error(err);
  }
  data.forEach(function (file) {
    console.log(file);
  });
});
