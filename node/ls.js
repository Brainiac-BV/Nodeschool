// module loading

const fs = require('fs');
const path = require('path');
const datas = [];

module.exports = function (dir, extension, callback) {
  fs.readdir(dir, function (err, data) {
    if (err) {
      return callback(err);
    }
  // loop through directory
    for (var i = 0; i < data.length; i++) {
    // filtering done here
      if (path.extname(data[i]) === extension) {
        datas.push(data[i]);
        return datas;
      }
    }
    callback(null, datas);
  });
};
